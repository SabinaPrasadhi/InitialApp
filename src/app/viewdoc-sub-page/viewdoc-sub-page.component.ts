import { Component, OnInit } from '@angular/core';
import { Child } from './child';
import { Parent } from './parent';

@Component({
  selector: 'app-viewdoc-sub-page',
  templateUrl: './viewdoc-sub-page.component.html',
  styleUrls: ['./viewdoc-sub-page.component.css'],
  template: `
  

  <h1>{{title}}</h1>
  <p>Birth Registration Number: {{newBaby.reg}}</p>
  <p>Registration Date: {{newBaby.dob}}</p>

  <br><fieldset>
        <legend>Child Details</legend>
      <div class="form-group" name="Birth Details">
          <p>Full Name:{{newBaby.name}}</p>
      <p>HIN:{{newBaby.hin}}</p>
         
          <fieldset>
          <legend>Birth Details</legend>
              <p>Date of Birth:{{newBaby.dob}}</p>
                <p>Time of Birth:{{newBaby.tob}}</p>
                <p>Gender:{{newBaby.gender}} </p>
                <p>Birth Weight:{{newBaby.bweight}}(in grams)</p>
                
                  </fieldset>
              
            </div>
          <fieldset>
            <legend>Vaccination Details</legend>
            <p>Vaccination Profile:{{newBaby.vprofile}}</p>
                
            </fieldset>

            <fieldset>
            <legend>Birth Location Details</legend>
            <p>Place of Birth:{{newBaby.pob}}</p>
            </fieldset>

            <fieldset>
              <legend>Current Location</legend>
              <p>RDHS Area:{{newBaby.rdhs}} </p>
              <p>DS Area:{{newBaby.ds}} </p>
             <p>MOH Area:{{newBaby.moh}} </p>
              <p>PHM Area:{{newBaby.phm}} </p>
                  <p>GN Area:{{newBaby.gn}} </p>
                  
              </fieldset>

              <fieldset>
                  <legend>Current Details</legend>
                  <p>Address Line 1:{{newBaby.addline1}}</p>
                      <p>Address Line 2:{{newBaby.addline2}}</p>
                      <p>Address Line 3:{{newBaby.addline3}}</p>
                      <p>Postal Code:{{newBaby.pcode}}</p>
                      <p>Address Type:{{newBaby.addtype}} </p>
        
                  </fieldset><br>
                  <fieldset>
                      <legend>Parent Details</legend>
                      <p>Mother's Maiden Name:{{newParent.mname}}</p>
                           <p>Mother's NIC:{{newParent.mnic}}</p>
                          <p>Mother's Reg. No:{{newParent.mreg}}</p>
                          <p>Father/Guardian Name:{{newParent.fgname}}</p>
                          <p>Father/Guardian NIC:{{newParent.fgnic}}</p>
                          <p>Contact No.:{{newParent.contact}}</p>
                          
                          <p>Are there any Multiple Births?{{newParent.mbirth}}</p>
                          <p>What is the Protection Status Against Congenital Rubbella Syndrome(CRS)?{{newParent.crs}}</p>
                          <p>What is the Protection Status Against Neonatal Tetanus(NNT)?{{newParent.nnt}}</p>
  <br><fieldset>
      <legend>Additional Information</legend>
      <p>Mother's BHT No.:{{newParent.mbht}}</p>
        <p>Ward:{{newParent.ward}}</p>
        <p>Birth Certificate No.:{{newParent.bcerti}}</p>
        <p>Details of Delivery:{{newParent.delidetail}}</p>
        <p>Is there a Complication in Delivery:{{newParent.comp}}</p>
        <p>Infant Status:{{newParent.status}}</p>
          
      </fieldset>     
  </fieldset><br> 
  <div style="text-align:center">
  <input type="button" value="Update" onclick="window.location='/update-page';">&nbsp;<input type="button" value="Delete">&nbsp;
  <input type="button" value="Go to Main View Page" onclick="window.location='/view-page';"/>
  </div><br>
  </fieldset>
      


  
 
`
})
export class ViewdocSubPageComponent {
  title = 'Details of the Child';

  childFacts = [
    new Child(1,'Pinky','2018.01.24','9.45','Female',0.25,'BCG','Borella','Colombo','Colombo','Colombo','Borella','Borella-North','No.354','Cota Road','Borella','008','own',1)
   //new Child(2, 'Sally','2018.01.24','9.45',2)
   
 ];
 newBaby = this.childFacts[0];
  

 parentFacts = [

  new Parent('Brandi','895023776v',1001,'Bandu','803536486v', '07756347889' ,'Yes','No','No',546,24,5674,'Siserian','yes','Live')
];
  
newParent = this.parentFacts[0];
}


