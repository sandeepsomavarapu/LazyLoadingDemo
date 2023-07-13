import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import SharedModule from "../shared.module";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { SignUpComponent } from "../auth/sign-up/sign-up.component";
import { AboutUsComponent } from "./about-us/about-us.component";
const routes: Routes = [
{path:'contactus',component:ContactUsComponent},
{path:'aboutus',component:AboutUsComponent}
];
@NgModule({
imports:[SharedModule,RouterModule.forChild(routes)],
declarations:[ContactUsComponent,AboutUsComponent],
exports: [RouterModule]
})

export default class CommonModule{};