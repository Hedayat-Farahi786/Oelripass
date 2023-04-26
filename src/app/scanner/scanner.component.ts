import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrowserMultiFormatReader } from '@zxing/library';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {


  loading: boolean = true;

  result = '';

  constructor(private messageService: MessageService, private router: Router) { }

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
            this.loading = false;

            codeReader.decodeFromVideoDevice(
              '',
              videoElement,
              (result: any) => {
                if (result !== null) {
                  this.router.navigate(['/tool', result.getText()]);
                }
              }
            );
          });
      })
      .catch((err: any) => console.error(err));
  }

  addSingle() {
    this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService', sticky: true });
    setTimeout(() => {
        this.messageService.clear();
    }, 2000);
  }

}
