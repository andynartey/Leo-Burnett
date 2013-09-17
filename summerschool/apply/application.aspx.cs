using System;
using System.Collections.Generic;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LeoSummerSchool
{
    public partial class application : System.Web.UI.Page
    {

        Applicant _applicant;

        protected void Page_Load(object sender, EventArgs e)
        {

        }



        private bool IsFormValid()
        {

            bool returnValue = true;


            //check that none of the fields are empty
            if (FirstNameTxtBox.Text.Trim().Length == 0)
            {
                returnValue = false;
            }

            if (LastNameTextbox.Text.Trim().Length == 0)
            {
                returnValue = false;
            }

            if (AddressTxtBox1.Text.Trim().Length == 0)
            {
                returnValue = false;
            }

            if (AddressTxtBox2.Text.Trim().Length == 0)
            {
                returnValue = false;
            }

            if (CountyTxtBox.Text.Trim().Length == 0)
            {
                returnValue = false;
            }

            if (PostcodeTxtBox.Text.Trim().Length == 0)
            {
                returnValue = false;
            }

             if (ContactNumberTxtBox.Text.Trim().Length == 0)
            {
                returnValue = false;
            }

             if (EmailTxtBox.Text.Trim().Length == 0)
             {
                 returnValue = false;
             }
             else
             {


             }

            if (QuestionTxtBox1.Text.Trim().Length == 0)
            {
                returnValue = false;
            }

            if (QuestionTxtBox2.Text.Trim().Length == 0)
            {
                returnValue = false;
            }
            
            
       
            //and on email make sure it valid



            return returnValue;

        }


        private void CreateApplicantInstance()
        {
            Applicant applicant = new Applicant();

            applicant.FirstName = FirstNameTxtBox.Text.Trim();
            applicant.LastName = LastNameTextbox.Text.Trim();
            applicant.Address1 = AddressTxtBox1.Text.Trim();
            applicant.Address2 = AddressTxtBox2.Text.Trim();
            applicant.County = CountyTxtBox.Text.Trim();
            applicant.Postcode = PostcodeTxtBox.Text.Trim();
            applicant.ContactNumber = ContactNumberTxtBox.Text.Trim();
            applicant.Email = EmailTxtBox.Text.Trim();

            applicant.AnswerToQuestion1 = QuestionTxtBox1.Text.Trim();
            applicant.AnswerToQuestion2 = QuestionTxtBox2.Text.Trim();


            applicant.PositionSought = int.Parse(PositionRadioList.SelectedValue);
            applicant.EUCitizen = bool.Parse(EuCitizenRadioList.SelectedValue);
            applicant.WorkPermitRqd = bool.Parse(WorkPermitRqdRadioList.SelectedValue);

            applicant.WhereFoundOut = WhereFoundDrpDown.SelectedItem.Text;

            _applicant = applicant;

        }


        public Applicant ApplicantDetails
        {
            get
            {
                return _applicant;
            }
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
          
           
        }

        protected void Button1_Click1(object sender, EventArgs e)
        {
            Console.Write("asf");
        }

        protected void Button1_Click2(object sender, EventArgs e)
        {
            CreateApplicantInstance();


          //  ApplicationProcess processor = new ApplicationProcess();
           // processor.AddApplicant(_applicant);

            Server.Transfer("verifydetails.aspx");
        }

        protected void Button1_Click3(object sender, EventArgs e)
        {
            CreateApplicantInstance();


            //ApplicationProcess processor = new ApplicationProcess();
//            processor.AddApplicant(_applicant);

            Server.Transfer("verifydetails.aspx");
        
        }

    
     

       
        



    }
}