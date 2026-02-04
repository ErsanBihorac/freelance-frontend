import { Routes } from '@angular/router';
import { LandingPage } from './components/landing-page/landing-page';
import { ImprintPage } from './components/imprint-page/imprint-page';
import { PrivacyPolicyPage } from './components/privacy-policy-page/privacy-policy-page';
import { WildCardPage } from './components/wild-card-page/wild-card-page';

export const routes: Routes = [
    {path: "", component: LandingPage},
    {path: "imprint", component: ImprintPage},
    {path: "privacy-policy", component: PrivacyPolicyPage},
    {path: "**", component: WildCardPage}
];
