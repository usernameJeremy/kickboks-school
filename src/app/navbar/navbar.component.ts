import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isMobile!: boolean;
  menuOpen = false;

  ngOnInit() {
    this.checkDevice();
    window.addEventListener('resize', () => this.checkDevice());
  }

  checkDevice() {
    this.isMobile = window.innerWidth < 800; // Adjust the breakpoint as per your needs
  }

}