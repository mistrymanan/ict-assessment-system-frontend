import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-side-bar',
  templateUrl: './custom-side-bar.component.html',
  styleUrls: ['./custom-side-bar.component.css']
})
export class CustomSideBarComponent {
    @Input() navItems: Array<any>;
    @HostBinding('class.sidebar-nav') true;
    @HostBinding('attr.role') role;
  constructor() { }
  isDivider(navItem) {
    return !!navItem.divider
}

isTitle(navItem) {
    return !!navItem.title
}

isHasChild(navItem) {
    return navItem.hasOwnProperty('children') && navItem.children.length > 0;
}

}
