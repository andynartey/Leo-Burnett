using System;
using System.Collections.Generic;

using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LeoSummerSchool
{
    public partial class verifydetails : System.Web.UI.Page
    {
        Applicant _applicant;

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                FillinDetails();

            }

        }


        private void FillinDetails()
        {
            _applicant = PreviousPage.ApplicantDetails;

            if (_applicant.PositionSought == 1)
            {
                Postion.Text = "Account Handler";
            }
            else
            {
                Postion.Text = "Account Planner";
            }


            if (_applicant.EUCitizen)
            {

                EuCitizen.Text = "Yes";
            }
            else
            {
                EuCitizen.Text = "No";

            }

            if (_applicant.WorkPermitRqd)
            {
                WorkPermit.Text = "Yes";
            }
            else
            {
                WorkPermit.Text = "No";
            }


            FirstNameTxtBox.Text = _applicant.FirstName;
            LastNameTextbox.Text = _applicant.LastName;
            AddressTxtBox1.Text = _applicant.Address1;
            AddressTxtBox2.Text = _applicant.Address2;
            CountyTxtBox.Text = _applicant.County;
            PostcodeTxtBox.Text = _applicant.Postcode;
            ContactNumberTxtBox.Text = _applicant.ContactNumber;
            EmailTxtBox.Text = _applicant.Email;
            QuestionTxtBox1.Text = _applicant.AnswerToQuestion1;
            QuestionTxtBox2.Text = _applicant.AnswerToQuestion2;

            WhereFound.Text = _applicant.WhereFoundOut;



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

            _applicant = applicant;

        }


        private void SaveApplicant()
        {
            ApplicationProcess processor = new ApplicationProcess();
            processor.AddApplicant(_applicant);


        }

        protected void SubmitBtn_Click(object sender, EventArgs e)
        {
            CreateApplicantInstance();

        }

        protected void ReturnBtn_Click(object sender, EventArgs e)
        {
            Response.Redirect("index.aspx");
        }
    }
}