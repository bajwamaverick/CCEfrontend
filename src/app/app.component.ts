import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { filter } from 'rxjs/operators';
import { authCodeFlowConfig } from './core/oauth/idm.auth.config';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { useHash } from './app.flags';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'CCE Frontend';

  constructor(private router: Router, private oauthService: OAuthService) {
    
    this.configureCodeFlow();
    // Automatically load user profile
    this.oauthService.events
      .pipe(filter(e => e.type === 'token_received'))
      .subscribe(_ => this.oauthService.loadUserProfile());
  }

  private configureCodeFlow() {
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(_ => {
      if (useHash) {
        this.router.navigate(['/']);
      }
    });

    // Optional
    this.oauthService.setupAutomaticSilentRefresh();
  }



  get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return null;
    return claims['given_name'];
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  refresh() {
    this.oauthService.refreshToken();
  }
}
