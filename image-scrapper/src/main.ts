import { once, showUI } from '@create-figma-plugin/utilities'

import { CloseHandler, CreateRectanglesHandler, OnLoadHandler } from './types'

export default function () {
  once<CreateRectanglesHandler>('CREATE_RECTANGLES', function (count: number) {
  
    console.log({page: figma.currentPage, selection: figma.currentPage.selection});

    figma.currentPage.selection.forEach((n:SceneNode) => {
      const ellipsises = (n as FrameNode).findAllWithCriteria({ types: [
        'ELLIPSE', "TEXT"
      ]});

      ellipsises.forEach(e => console.log({e}));
    })

    figma.closePlugin()
  });

  once<CloseHandler>('CLOSE', function () {
    figma.closePlugin()
  });

  showUI({
    height: 137,
    width: 240
  });
}
