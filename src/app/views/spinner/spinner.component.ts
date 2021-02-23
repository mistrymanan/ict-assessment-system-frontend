import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  dt: any; 
  dataDisplay: any; 
  constructor(private http: HttpClient) { 
  } 

  ngOnInit(): void { 
      this.http.get( 
'http://www.mocky.io/v2/5ec6a61b3200005e00d75058') 
          .subscribe(Response => { 
                
              // If Response comes function 
              // hideloader() is called 
              if (Response) { 
                  hideloader(); 
              } 
              console.log(Response) 
              this.dt = Response; 
              this.dataDisplay = this.dt.data; 
          }); 
      // Function is defined 
      function hideloader() { 

          // Setting display of spinner 
          // element to none 
          document.getElementById('loading') 
              .style.display = 'none'; 
      } 
  } 
}
  