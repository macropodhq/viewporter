import classNames from './index.mcss';
import {getMobileScaleFactor, getBodyOffset, getViewportCoordinates} from '../src';
import image from './LpLd2NGvpaiys.gif';

document.body.className = classNames.Body;

const demoInfo = document.getElementById('demoinfo');
demoInfo.className = classNames.DemoInfo;

const viewporter = document.getElementById('viewporter');
viewporter.className = classNames.Viewporter;

const imgEl = document.createElement('img');
imgEl.src = image;
imgEl.className = classNames.Image;
viewporter.appendChild(imgEl);

function handleViewportChange() {
  const scaleFactor = getMobileScaleFactor();
  const coordinates = getViewportCoordinates();

  viewporter.style.fontSize = `${16 * scaleFactor}px`;
  viewporter.style.top = `${coordinates.top}px`;
  viewporter.style.left = `${coordinates.left}px`;
  viewporter.style.width = `${coordinates.width}px`;
  viewporter.style.height = `${coordinates.height}px`;
}

window.addEventListener('scroll', handleViewportChange);
window.addEventListener('resize', handleViewportChange);
handleViewportChange();
