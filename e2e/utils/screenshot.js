const { execSync } = require('child_process');
const fs = require('fs');

const adb = (cmd) => execSync(`adb -s ${device.id} shell ${cmd}`);

// Freeze the status bar (clock, battery, network) so screenshots are deterministic
function enableDemoMode() {
  adb('settings put global sysui_demo_allowed 1');
  const broadcast = (args) => adb(`am broadcast -a com.android.systemui.demo -e command ${args}`);
  broadcast('enter');
  broadcast('clock -e hhmm 1200');
  broadcast('battery -e level 100 -e plugged false');
  broadcast('network -e wifi show -e level 4 -e mobile show -e datatype none -e level 4');
  broadcast('notifications -e visible false');
}

function disableDemoMode() {
  adb('am broadcast -a com.android.systemui.demo -e command exit');
}

function disableAnimations() {
  adb('settings put global window_animation_scale 0');
  adb('settings put global transition_animation_scale 0');
  adb('settings put global animator_duration_scale 0');
}

async function takeScreenshot(name) {
  const path = await device.takeScreenshot(name);
  return fs.readFileSync(path);
}

module.exports = { enableDemoMode, disableDemoMode, disableAnimations, takeScreenshot };
