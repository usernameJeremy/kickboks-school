import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public isMobile!: boolean;
  public menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  ngOnInit() {
    this.checkDevice();
    window.addEventListener('resize', () => this.checkDevice());
  }

  checkDevice() {
    this.isMobile = window.innerWidth < 1200; // Adjust the breakpoint as per your needs
  }




}
