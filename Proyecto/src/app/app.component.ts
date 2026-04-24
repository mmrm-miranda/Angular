import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Proyecto';
  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.crearScript("../assets/js/bootstrap.min.js")
    this.crearScript("../assets/js/jquery-3.2.1.min.js")
    this.crearScript("../assets/js/owl.carousel.min.js")
    this.crearScript("../assets/js/jquery.marquee.min.js")
    this.crearScript("../assets/js/main.js")
    this.crearScript("../assets/vendor/modernizr/modernizr.min.js")

		this.crearScript("../assets/vendor/jquery/jquery.min.js")
		this.crearScript("../assets/vendor/jquery.appear/jquery.appear.min.js")
		this.crearScript("../assets/vendor/jquery.easing/jquery.easing.min.js")
		this.crearScript("../assets/vendor/jquery-cookie/jquery-cookie.min.js")
		this.crearScript("../assets/vendor/popper/umd/popper.min.js")
		this.crearScript("../assets/vendor/bootstrap/js/bootstrap.min.js")
		this.crearScript("../assets/vendor/common/common.min.js")
		this.crearScript("../assets/vendor/jquery.validation/jquery.validation.min.js")
		this.crearScript("../assets/vendor/jquery.easy-pie-chart/jquery.easy-pie-chart.min.js")
		this.crearScript("../assets/vendor/jquery.gmap/jquery.gmap.min.js")
		this.crearScript("../assets/vendor/jquery.lazyload/jquery.lazyload.min.js")
		this.crearScript("../assets/vendor/isotope/jquery.isotope.min.js")
		this.crearScript("../assets/vendor/owl.carousel/owl.carousel.min.js")
		this.crearScript("../assets/vendor/magnific-popup/jquery.magnific-popup.min.js")
		this.crearScript("../assets/vendor/vide/vide.min.js")
		

		this.crearScript("../assets/js/theme.js")
		

		this.crearScript("../assets/js/custom.js")
		

		this.crearScript("../assets/js/theme.init.js")
    

    

  }
  crearScript(dir:string){
    const body= document.body;
    const script=document.createElement('script');

    script.innerHTML='';
    script.src=dir;
    script.async=false;
    script.defer=false;

    body.appendChild(script);
  }
}
