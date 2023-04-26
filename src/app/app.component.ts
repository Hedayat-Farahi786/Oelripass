import { Component, ViewChild } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oerlipass';
  result = '';

  @ViewChild('audio') audioPlayerRef: any;


  startScanning() {
    const codeReader = new BrowserMultiFormatReader();
    codeReader
      .listVideoInputDevices()
      .then((videoInputDevices: MediaDeviceInfo[]) => {
        navigator.mediaDevices.getUserMedia({
          video: {
            deviceId: videoInputDevices[0].deviceId
          }
        })
        .then((stream: MediaStream) => {
          const videoElement = document.createElement('video');
          videoElement.srcObject = stream;
          videoElement.setAttribute('autoplay', 'true');
          videoElement.setAttribute('muted', 'true');
          videoElement.setAttribute('playsinline', 'true');
          document.body.appendChild(videoElement);

          codeReader.decodeFromVideoDevice(
            '',
            videoElement,
            (result: any) => {
              if (result !== null) {
                this.audioPlayerRef.nativeElement.play();
                this.result = result.getText();
              }
            }
          );
        });
      })
      .catch((err: any) => console.error(err));
  }

}
