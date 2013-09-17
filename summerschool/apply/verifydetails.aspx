<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="verifydetails.aspx.cs" Inherits="LeoSummerSchool.verifydetails" %>
<%@ PreviousPageType VirtualPath="application.aspx" %> 


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<style type="text/css">body {overflow: hidden;}</style>

<Script src="http://connect.facebook.net/en_US/all.js#xfbml=1?"></script>

<Script type="text/javascript">
FB.init({
appId: FB_APP_ID,Status: true,Cookie: true,Xfbml: true
});
window.fbAsyncInit = function().{
fb.canvas.setautoresize();
}
</Script>




    <title>Verification Page: Leo Grads 2011</title>
    <link type="text/css" rel="Stylesheet" href="assets/css/appform.css" />
</head>

<body onLoad="FB.Canvas.setSize({width: 520, height: 9850})">
<div id="fb-root"></div>
    <div>
    <h2>SUMMER SCHOOL</h2>
    <form id="form1" runat="server">

    <fieldset>
        <legend>What role are you applying for?</legend>
       
         <asp:Literal ID="Postion" runat="server"></asp:Literal><br /><br />
        <asp:RadioButtonList ID="PositionRadioList" runat="server"  Visible="false"   Enabled ="false"
            RepeatDirection="Horizontal">
            <asp:ListItem Value="1">Account Handler</asp:ListItem>
            <asp:ListItem Value="2">Account Planner</asp:ListItem>
        </asp:RadioButtonList>
    </fieldset>
        
    <fieldset class="inputFieldwidth">
        <legend>Personal details</legend>
        <label for="FirstNameTxtBox">First name*</label><br /><br />
        <asp:Literal ID="FirstNameTxtBox" runat="server"></asp:Literal><br /><br />
        <label for="LastNameTextbox">Surname*</label><br /><br />
        <asp:Literal ID="LastNameTextbox" runat="server"></asp:Literal><br /><br />
        <label for="AddressTxtBox1">Address</label><br /><br />
        <asp:Literal ID="AddressTxtBox1" runat="server"></asp:Literal><br /><br />
        <asp:Literal ID="AddressTxtBox2" runat="server"></asp:Literal><br /><br />
        <label for="CountyTxtBox">County</label><br /><br />
        <asp:Literal ID="CountyTxtBox" runat="server"></asp:Literal><br /><br />
        <label for="PostcodeTxtBox">Postcode*</label><br /><br />
        <asp:Literal ID="PostcodeTxtBox" runat="server"></asp:Literal><br /><br />
        <label for="CountryTxtBox">Country*</label><br /><br />
        <asp:Literal ID="CountryTxtBox" runat="server"></asp:Literal><br /><br />
        <br />
    </fieldset>
        
    <fieldset class="inputFieldwidth">
        <legend>Contact details</legend>
        <label for="ContactNumberTxtBox">Contact number</label><br /><br />
        <asp:Literal ID="ContactNumberTxtBox" runat="server"></asp:Literal>
        <br /><br />
        <label for="EmailTxtBox">Email address</label><br /><br />
        <asp:Literal ID="EmailTxtBox" runat="server"></asp:Literal>
    </fieldset>
        
    <fieldset>
        <legend><acronym title="European Union">EU</acronym> Citizenship</legend>
        <p>I am an EU Citizen</p><br />
    <asp:Literal ID="EuCitizen" runat="server"></asp:Literal><br />
        <asp:RadioButtonList ID="EuCitizenRadioList" runat="server"  Visible="false"  Enabled ="false"
            RepeatDirection="Horizontal">
            <asp:ListItem Selected="True" Value="true">Yes</asp:ListItem>
            <asp:ListItem Value="false">No</asp:ListItem>
        </asp:RadioButtonList>
        <br />
                        
        <p>If no, is a work permit required?</p><br />
        <asp:Literal ID="WorkPermit" runat="server"></asp:Literal>
        <asp:RadioButtonList ID="WorkPermitRqdRadioList" runat="server"  Visible="false"  Enabled ="false"
            RepeatDirection="Horizontal">
            <asp:ListItem Value="true">Yes</asp:ListItem>
            <asp:ListItem Selected="True" Value="false" >No</asp:ListItem>
        </asp:RadioButtonList>
    </fieldset>
        
    <!--New info Begins-->
    <fieldset class="inputFieldwidth">
            <legend>Education</legend>
            <h3>Further Education</h3>
            <label for="FurtherEducationTxtBox">Name of Institution</label><br /><br />
            <asp:Literal ID="FurtherEducationTxtBox" runat="server" ></asp:Literal><br /><br />
            <label for="FurtherEducationAQuestionTxtBox">Qualifications, subject and grades (or 
            expected grades)</label><br /><br />
            <asp:Literal ID="FurtherEducationAQuestionTxtBox" runat="server"></asp:Literal><br /><br />
            <label for="FurtherEducationBQuestionTxtBox">Additional Information</label><br /><br />
            <asp:Literal ID="FurtherEducationBQuestionTxtBox" runat="server"></asp:Literal><br /><br />
                    
            <h3>A levels</h3>
            <label for="SchoolCollegeTxtBox">School/College</label><br /><br />
            <asp:Literal ID="SchoolCollegeTxtBox" runat="server"></asp:Literal><br /><br />
            <label for="SchoolCollegeAQuestionTxtBox">Qualifications, subject and grades</label><br /><br />
            <asp:Literal ID="SchoolCollegeAQuestionTxtBox" runat="server" ></asp:Literal><br /><br />
            <label for="SchoolCollegeBQuestionTxtBox">Additional Information</label><br /><br />
            <asp:Literal ID="SchoolCollegeBQuestionTxtBox" runat="server"></asp:Literal><br /><br />
                    
                    
            <h3>GCSEs</h3>
            <label for="SchoolTxtBox">School</label><br /><br />
            <asp:Literal ID="SchoolTxtBox" runat="server"></asp:Literal><br /><br />
            <li><label for="SchoolQuestionATxtBox">Qualifications, subject and grades</label><br /><br />
            <asp:Literal ID="SchoolQuestionATxtBox" runat="server"></asp:Literal><br /><br />
            <label for="SchoolQuestionBTxtBox">Additional Information</label><br /><br />
            <asp:Literal ID="SchoolQuestionBTxtBox" runat="server"></asp:Literal><br /><br />
    </fieldset>
            
    <fieldset class="inputFieldwidth">
            <legend>Work Experience</legend><br /><br />
            <p>Please provide details of your most relevant work experience or placements.</p>
                    
            <!--Work Experience Set 1-->
            <label for="EmployerTxtBoxA">Employer</label><br /><br />
            <asp:Literal ID="EmployerTxtBoxA" runat="server"></asp:Literal><br /><br />
            <label for="JobTitleTxtBoxA">Job Title</label><br /><br />
            <asp:Literal ID="JobTitleTxtBoxA" runat="server"></asp:Literal><br /><br />
            <label for="DateFromTxtBoxA">Date from</label><br /><br />
            <asp:Literal ID="DateFromTxtBoxA" runat="server"></asp:Literal><br /><br />
                    
            <label for="DateToTxtBoxA">Date to</label><br /><br />
            <asp:Literal ID="DateToTxtBoxA" runat="server"></asp:Literal><br /><br />

            <label for="WorkExperienceSummaryTxtBoxA">Summary of responsibilities and achievements</label><br /><br />
            <asp:Literal ID="WorkExperienceSummaryTxtBoxA" runat="server"></asp:Literal><br /><br />

        <!--Work Experience Set 2-->
            <label for="EmployerTxtBoxB">Employer</label><br /><br />
            <asp:Literal ID="EmployerTxtBoxB" runat="server"></asp:Literal><br /><br />
                   
            <label for="JobTitleTxtBoxB">Job Title</label><br /><br />
            <asp:Literal ID="JobTitleTxtBoxB" runat="server"></asp:Literal><br /><br />
                    
            <label for="DateFromTxtBoxB">Date from</label><br /><br />
            <asp:Literal ID="DateFromTxtBoxB" runat="server"></asp:Literal><br /><br />
                   
            <label for="DateToTxtBoxA">Date to</label><br /><br />
            <asp:Literal ID="DateToTxtBoxB" runat="server"></asp:Literal><br /><br />

            <label for="WorkExperienceSummaryTxtBoxB">Summary of responsibilities and achievements</label><br /><br />
            <asp:Literal ID="WorkExperienceSummaryTxtBoxB" runat="server"></asp:Literal><br /><br />

        <!--Work Experience Set 3-->
                    
            <label for="EmployerTxtBoxC">Employer</label><br /><br />
            <asp:Literal ID="EmployerTxtBoxC" runat="server"></asp:Literal><br /><br />
                    
            <label for="JobTitleTxtBoxC">Job Title</label><br /><br />
            <asp:Literal ID="JobTitleTxtBoxC" runat="server"></asp:Literal><br /><br />

            <label for="DateFromTxtBoxC">Date from</label><br /><br />
            <asp:Literal ID="DateFromTxtBoxC" runat="server"></asp:Literal><br /><br />
                    
            <label for="DateToTxtBoxC">Date to</label><br /><br />
            <asp:Literal ID="DateToTxtBoxC" runat="server"></asp:Literal><br /><br />

            <label for="WorkExperienceSummaryTxtBoxC">Summary of responsibilities and achievements</label><br /><br />
            <asp:Literal ID="WorkExperienceSummaryTxtBoxC" runat="server"></asp:Literal><br /><br />
    </fieldset>
    <!--New info Ends-->

    <fieldset>
        <legend><acronym title="Question and Answer">Q&amp;A</acronym></legend>
        
        <label for="QuestionTxtBox1">Why do you want a place on the Summer School? (250 maximum words)*</label><br /><br />
        <asp:Literal ID="QuestionTxtBox1" runat="server"></asp:Literal><br /><br />
        <label for="QuestionTxtBox2">What piece of communications activity (This could be anything, a whole campaign or a specific execution you have seen on a TV ad, billboard, internet etc) has really made you think? (250 maximum words)*</label><br /><br />
        <asp:Literal ID="QuestionTxtBox2" runat="server" ></asp:Literal><br /><br />
        <label for="QuestionTxtBox3">Tell us something that no-one else knows. (250 maximum words)*</label><br /><br />
        <asp:Literal ID="QuestionTxtBox3" runat="server" ></asp:Literal><br /><br />
    </fieldset>
        
    <fieldset class="WhereFoundDrpDown">
    <legend>Where did you hear about this?</legend>
     <asp:Literal ID="WhereFound" runat="server"></asp:Literal>
    <asp:DropDownList ID="WhereFoundDrpDown" runat="server" Visible="false"  Enabled ="false">
        <asp:ListItem>Select</asp:ListItem>
        <asp:ListItem>Leo Burnett Website</asp:ListItem>
        <asp:ListItem>University Careers Service</asp:ListItem>
        <asp:ListItem>Facebook</asp:ListItem>
        <asp:ListItem>Ad Grads</asp:ListItem>
        <asp:ListItem>Recruitment Agency</asp:ListItem>
        <asp:ListItem>IPA</asp:ListItem>
        <asp:ListItem>Search Engine</asp:ListItem>
        <asp:ListItem>Friend/Word of Mouth</asp:ListItem>
        <asp:ListItem>Other</asp:ListItem>
    </asp:DropDownList>
    </fieldset>
        
 <asp:Button ID="SubmitBtn" runat="server" Text="Submit" 
        onclick="SubmitBtn_Click" />
 <asp:Button ID="ReturnBtn" runat="server" Text="Return" 
        onclick="ReturnBtn_Click" />
    
    </form>
    </div>
</body>
</html>
