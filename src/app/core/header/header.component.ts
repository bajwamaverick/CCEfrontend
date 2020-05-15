import { Component, OnInit } from '@angular/core';
import { UserpermissionService } from './userpermission.service';
import { Iuserpermission } from './userpermission.model';

@Component({
  selector: 'cce-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  providers: [UserpermissionService]
})
export class HeaderComponent implements OnInit {

  constructor(private userPermissionService: UserpermissionService) { }
  private userPermisions: Iuserpermission[];
  private userName:string = 'Bob';

  ngOnInit(): void {
    this.getUserPermissions(this.userName);
  }

  getUserPermissions(userName: string): void {
    this.userPermissionService.getUserPermissions(userName)
      .subscribe(permissions => this.userPermisions = permissions);
  }


}
