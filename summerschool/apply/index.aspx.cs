using System;
using System.Collections.Generic;

using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace LeoSummerSchool
{
    public partial class index : System.Web.UI.Page
    {
        Applicant _applicant;

        protected void Page_Load(object sender, EventArgs e)
        {

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

        protected void VerfiyBtn_Click(object sender, EventArgs e)
        {
            CreateApplicantInstance();


            ApplicationProcess processor = new ApplicationProcess();
            processor.AddApplicant(_applicant);

            Server.Transfer("verifydetails.aspx");
        }

    }
}