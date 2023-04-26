import { Component, OnInit } from '@angular/core';
import { BrowserMultiFormatReader } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  result = '';

  constructor() { }

  ngOnInit(): void {
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
            videoElement.setAttribute('class', 'rounded-md my-5');
            videoElement.classList.add('video_output')
            document.querySelector('.scanner__video')?.appendChild(videoElement);
  
            codeReader.decodeFromVideoDevice(
              '',
              videoElement,
              (result: any) => {
                if (result !== null) {
                  this.result = result.getText();
                }
              }
            );
          });
        })
        .catch((err: any) => console.error(err));
  }

}
