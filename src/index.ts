import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * A plugin for myorg/jupyterlab-fsx-monokai-theme
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@fredericosantos/jupyterlab-fsx-monokai-theme:plugin',
  requires: [IThemeManager],
  activate: function(app: JupyterFrontEnd, manager: IThemeManager) {
    const style = '@fredericosantos/jupyterlab-fsx-monokai-theme/index.css';

    manager.register({
      name: 'FSX Monokai',
      isLight: false,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  },
  autoStart: true
};

export default plugin;
