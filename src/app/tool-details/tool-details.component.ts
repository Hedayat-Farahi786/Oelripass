import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tool-details',
  templateUrl: './tool-details.component.html',
  styleUrls: ['./tool-details.component.scss']
})
export class ToolDetailsComponent implements OnInit, AfterViewInit {

  @ViewChild('audio') audioPlayerRef: any;


  toolId: string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.audioPlayerRef?.nativeElement.addEventListener('ended', this.handleAudioEnded.bind(this));
    
    this.route.params.subscribe(params => {
      this.toolId = params['id'];
    });
  }
  handleAudioEnded() {
    this.audioPlayerRef?.nativeElement.removeEventListener('ended', this.handleAudioEnded);
  }
  
  ngAfterViewInit(): void {
    this.audioPlayerRef.nativeElement.play();
  }

}
