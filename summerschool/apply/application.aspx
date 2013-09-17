<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="application.aspx.cs" Inherits="LeoSummerSchool.application" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">



<script src="http://connect.facebook.net/en_US/all.js#xfbml=1?"></script>

<script type="text/javascript">
FB.init({
appId: FB_APP_ID,Status: true,Cookie: true,Xfbml: true
});
window.fbAsyncInit = function().{
fb.canvas.setautoresize();
}
</script>




    <title>Application form: Leo Grads 2011</title>
    <link type="text/css" rel="Stylesheet" href="assets/css/appform.css" />
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
    <script type="text/javascript" src="assets/js/appForm.js"></script>
</head>
<body onLoad="FB.Canvas.setSize({width: 520, height: 4350})">
<div id="fb-root"></div>
    <div>
        <h2>SUMMER SCHOOL</h2>
    	<p class="formTips">Please complete this form in one session.<br />
        You cannot save a draft so you will lose your work if you do not submit your application.<br />
        Fields marked with an asterisk(*) are mandatory</p>
        <form id="facebookForm" runat="server" class="contactForm">

            <fieldset>
                <legend>What role are you applying for?</legend>
                <p>Please indicate whether you are applying to be an*:</p>
                <ul>
                    <li><asp:RadioButtonList ID="PositionRadioList" name="PositionRadioList" runat="server" 
                    RepeatDirection="Horizontal" tabindex="1">
                    <asp:ListItem Value="1" >Account Handler</asp:ListItem>
                    <asp:ListItem Value="2" >Account Planner</asp:ListItem>
                    </asp:RadioButtonList>
                    </li>
                <asp:Label class="error" runat="server" ID="AccountErr">Which account are you applying for?</asp:Label>
                </ul>
            </fieldset>
        
            <fieldset class="inputFieldwidth">
                <ul>
                <legend>Personal details</legend>
                <li>
                    <label for="FirstNameTxtBox">First name*</label>
                    <asp:TextBox ID="FirstNameTxtBox" name="FirstNameTxtBox" runat="server" tabindex="2" ></asp:TextBox>
                   
                </li>
 <asp:Label class="error" runat="server" ID="FirstNameErr">Please tell us your First name</asp:Label>
                <li>
                    <label for="LastNameTextbox">Surname*</label>
                    <asp:TextBox ID="LastNameTextbox" name="LastNameTextbox" runat="server" tabindex="3" ></asp:TextBox>
                    
                </li>
<asp:Label class="error" runat="server" ID="LastNameErr">Please tell us your Surname</asp:Label>
                <li>
                    <label for="AddressTxtBox1">Address*</label>
                    <asp:TextBox ID="AddressTxtBox1" name="AddressTxtBox1" runat="server" tabindex="4"></asp:TextBox>
                   
                </li>
 <asp:Label class="error" runat="server" ID="AddressErr">Please tell us the first line of your address</asp:Label>
                <li>
                    <asp:TextBox ID="AddressTxtBox2" runat="server" tabindex="5"></asp:TextBox>
                </li>
                <li>
                    <label for="CountyTxtBox">County (or region)*</label>
                    <asp:TextBox ID="CountyTxtBox" name="CountyTxtBox" runat="server" tabindex="6"></asp:TextBox>
                    <asp:Label class="error" runat="server" ID="CountyErr">Please tell us your county</asp:Label>
                </li>

                <li>
                    <label for="PostcodeTxtBox">Postcode*</label>
                    <asp:TextBox ID="PostcodeTxtBox" name="PostcodeTxtBox" runat="server" tabindex="7"></asp:TextBox>
<asp:Label class="error" runat="server" ID="PostcodeErr">Please tell us your postcode</asp:Label>
                    <br />
                   
                </li>
                <li>
                    <label for="CountryTxtBox">Country*</label>
                    <asp:TextBox ID="CountryTxtBox" name="CountryTxtBox" runat="server" tabindex="8"></asp:TextBox>
                    <asp:Label class="error" runat="server" ID="CountryErr">Please select your country</asp:Label>
                </li>
                </ul>
            </fieldset>
        
            <fieldset class="inputFieldwidth">
                <ul>
                    <legend>Contact details</legend>
                    <li>
                        <label for="ContactNumberTxtBox">Contact number*</label>
                        <asp:TextBox ID="ContactNumberTxtBox" name="ContactNumberTxtBox" runat="server" tabindex="9"></asp:TextBox>
                        <asp:Label class="error" runat="server" ID="ContactErr">Please provide a contact number</asp:Label>
                    </li>
                    <li>
                        <label for="EmailTxtBox">Email address*</label>
                        <asp:TextBox ID="EmailTxtBox" name="EmailTxtBox" runat="server" tabindex="10" class="inputTxt"></asp:TextBox>
                        <br />
                        <asp:Label class="error" runat="server" ID="EmailErr">Please enter your email address</asp:Label>
                    </li>
                </ul>
            </fieldset>
        
            <fieldset>
                <legend><acronym title="European Union">EU</acronym> Citizenship*</legend>
                <p>I am an EU Citizen</p>
                <ul>
                <li><asp:RadioButtonList ID="EuCitizenRadioList" runat="server" 
                    RepeatDirection="Horizontal" tabindex="11">
                    <asp:ListItem Value="true">Yes</asp:ListItem>
                    <asp:ListItem Value="false">No</asp:ListItem>
                </asp:RadioButtonList>
                <asp:Label ID="Label1" class="error" runat="server">Are you an EU citizen?</asp:Label>
                </li>
                
                </ul>        
                <p>If no, is a work permit required?</p>
                <ul>
                <li><asp:RadioButtonList ID="WorkPermitRqdRadioList" runat="server" 
                    RepeatDirection="Horizontal" tabindex="12">
                    <asp:ListItem Value="true">Yes</asp:ListItem>
                    <asp:ListItem Value="false">No</asp:ListItem>
                </asp:RadioButtonList>
                <asp:Label ID="Label2" class="error" runat="server">Do you require a work permit?</asp:Label>
                </li>
                </ul>
            </fieldset>
            
            <fieldset class="inputFieldwidth">
                <ul>
                    <legend>Education</legend>
                    <!--Education Set 1-->
                    <div class="longQuery">
                        <h3>Further Education</h3>
                        <li>
                    	    <label for="FurtherEducationTxtBox">Name of Institution</label>
                            <asp:TextBox ID="FurtherEducationTxtBox" name="FurtherEducationTxtBox" runat="server" tabindex="13"></asp:TextBox>
                        </li>
                        <li><label for="FurtherEducationAQuestionTxtBox">Qualifications, subject and grades (or expected grades)</label>
                        <asp:TextBox ID="FurtherEducationAQuestionTxtBox" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="14" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                        <br />
                        <br /></li>
                    
                        <li><label for="FurtherEducationBQuestionTxtBox">Additional information</label>
                        <asp:TextBox ID="FurtherEducationBQuestionTxtBox" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="15" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                        </li>
                    </div>
                    
                    <!--Education Set 2-->
                    <div class="longQuery">
                        <h3>A levels (or equivalent)</h3>
                        <li>
                    	    <label for="SchoolCollegeTxtBox">School/College</label>
                            <asp:TextBox ID="SchoolCollegeTxtBox" name="SchoolCollegeTxtBox" runat="server" tabindex="16"></asp:TextBox>
                        </li>
                        <li><label for="SchoolCollegeAQuestionTxtBox">Qualifications, subject and grades</label>
                        <asp:TextBox ID="SchoolCollegeQuestionATxtBox" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="17" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                        <br />
                        <br /></li>
                    
                        <li><label for="SchoolCollegeBQuestionTxtBox">Additional information</label>
                        <asp:TextBox ID="SchoolCollegeBQuestionTxtBox" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="18" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                        </li>
                    </div>
                    
                    <!--Education Set 3-->
                    <div class="longQuery">
                        <h3>GCSEs (or equivalent)</h3>
                        <li>
                    	    <label for="SchoolTxtBox">School</label>
                            <asp:TextBox ID="SchoolTxtBox" name="SchoolTxtBox" runat="server" tabindex="19"></asp:TextBox>
                            <asp:Label class="error" runat="server" ID="SchoolErr">Please provide a contact number</asp:Label>
                        </li>
                        <li><label for="SchoolQuestionATxtBox">Qualifications, subject and grades</label>
                        <asp:TextBox ID="SchoolQuestionATxtBox" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="19" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                        <br />
                        <br /></li>
                    
                        <li><label for="SchoolQuestionBTxtBox">Additional information</label>
                        <asp:TextBox ID="SchoolQuestionBTxtBox" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="20" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                        </li>
                    </div>
                </ul>
            </fieldset>
            
            <fieldset class="inputFieldwidth">
                <ul>
                    <legend>Work Experience</legend>
                    <p>Please provide details of your most relevant work experience or placements.</p>
                    
                    <!--Work Experience Set 1-->
                    <div class="longQuery">
                        <li>
                            <label for="EmployerTxtBoxA">Employer</label>
                            <asp:TextBox ID="EmployerTxtBox" name="EmployerTxtBoxA" runat="server" tabindex="21"></asp:TextBox>
                        </li>
                        <li>
                            <label for="JobTitleTxtBoxA">Job Title</label>
                            <asp:TextBox ID="JobTitleTxtBoxA" name="JobTitleTxtBoxA" runat="server" tabindex="22" class="inputTxt"></asp:TextBox>
                            <br />
                        </li>
                        <li>
                            <label for="DateFromTxtBoxA">Date from</label>
                            <asp:TextBox ID="DateFromTxtBoxA" name="DateFromTxtBoxA" runat="server" tabindex="23" class="inputTxt"></asp:TextBox>
                            <br />
                        </li>
                        <li>
                            <label for="DateToTxtBoxA">Date to</label>
                            <asp:TextBox ID="DateToTxtBox" name="DateToTxtBoxA" runat="server" tabindex="24" class="inputTxt"></asp:TextBox>
                            <br /></li>
                         <li>
                            <label for="WorkExperienceSummaryTxtBoxA">Summary of responsibilities and achievements</label>
                            <asp:TextBox ID="WorkExperienceSummaryTxtBoxA" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="25" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                         </li>
                     </div>

                    <!--Work Experience Set 2-->
                    <div class="longQuery">
                        <li>
                            <label for="EmployerTxtBoxB">Employer</label>
                            <asp:TextBox ID="EmployerTextBoxB" name="EmployerTxtBoxB" runat="server" tabindex="26"></asp:TextBox>
                        </li>
                        <li>
                            <label for="JobTitleTxtBoxA">Job Title</label>
                            <asp:TextBox ID="JobTitleTxtBoxB" name="JobTitleTxtBoxB" runat="server" tabindex="27" class="inputTxt"></asp:TextBox>
                            <br />
                        </li>
                        <li>
                            <label for="DateFromTxtBoxA">Date from</label>
                            <asp:TextBox ID="DateFromTxtBoxB" name="DateFromTxtBoxB" runat="server" tabindex="28" class="inputTxt"></asp:TextBox>
                            <br />
                        </li>
                        <li>
                            <label for="DateToTxtBoxA">Date to</label>
                            <asp:TextBox ID="DateToTxtBoxB" name="DateToTxtBoxB" runat="server" tabindex="29" class="inputTxt"></asp:TextBox>
                            <br /></li>
                         <li>
                            <label for="WorkExperienceSummaryTxtBoxB">Summary of responsibilities and achievements</label></label>
                            <asp:TextBox ID="WorkExperienceSummaryTxtBoxB" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="30" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                            </li>
                    </div>

                    <!--Work Experience Set 3-->
                    <div class="longQuery">
                        <li>
                            <label for="EmployerTxtBoxC">Employer</label>
                            <asp:TextBox ID="EmployerTxtBoxC" name="EmployerTxtBoxC" runat="server" tabindex="31"></asp:TextBox>
                        </li>
                        <li>
                            <label for="JobTitleTxtBoxC">Job Title</label>
                            <asp:TextBox ID="JobTitleTxtBoxC" name="JobTitleTxtBoxC" runat="server" tabindex="32" class="inputTxt"></asp:TextBox>
                            <br />
                        </li>
                        <li>
                            <label for="DateFromTxtBoxC">Date from</label>
                            <asp:TextBox ID="DateFromTxtBoxC" name="DateFromTxtBoxC" runat="server" tabindex="33" class="inputTxt"></asp:TextBox>
                            <br />
                        </li>
                        <li>
                            <label for="DateToTxtBoxC">Date to</label>
                            <asp:TextBox ID="DateToTxtBoxC" name="DateToTxtBoxC" runat="server" tabindex="34" class="inputTxt"></asp:TextBox>
                            <br /></li>
                         <li>
                            <label for="WorkExperienceSummaryTxtBoxC">Summary of responsibilities and achievements</label></label>
                            <asp:TextBox ID="WorkExperienceSummaryTxtBoxC" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="35" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                            </li>
                     </div>
                </ul>
            </fieldset>
        
            <fieldset>
                <ul>
                <legend><acronym title="Question and Answer">Q&amp;A</acronym></legend>
                <p>Before you submit your application, please answer the following questions. This is your chance to shine.</p>
                <li><label for="QuestionTxtBox1">Why do you want a place on the Summer School? (250 maximum words)*</label>
                <asp:TextBox ID="QuestionTxtBox1" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="36" onkeyup="wordCount(this,document.facebookForm.c)" class="required"></asp:TextBox>
                <br /><div class="count"><span><input type="text" name="c" value="0" size="5" onkeyup="wordCount(document.facebookForm.w,this)" />words entered</span></div></li>
                <br />
                <asp:Label class="error" runat="server" ID="QuOneErr">Please answer this question</asp:Label></li>
                
                <li><label for="QuestionTxtBox2">What piece of communications activity has really made you think? This could be anything, a whole campaign or a specific execution you have seen on a TV ad, billboard, internet etc. (250 maximum words)*</label>
                <asp:TextBox ID="QuestionTxtBox2" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="37" onkeyup="wordCount(this,document.facebookForm.d)" class="required"></asp:TextBox>
                <br /><div class="count"><span><input type="text" name="d" value="0" size="5" onkeyup="wordCount(document.facebookForm.w,this)" />words entered</span></div>
                <br />
                <asp:Label class="error" runat="server" ID="QuTwoErr">Please fill this in.</asp:Label></li>
                
                <li><label for="QuestionTxtBox3">Tell us something that no-one else knows. (250 maximum words)*</label>
                <asp:TextBox ID="QuestionTxtBox3" runat="server" TextMode="multiline" rows="5" columns="65" tabindex="38" onkeyup="wordCount(this,document.facebookForm.e)" class="required"></asp:TextBox>
                <br /><div class="count"><span><input type="text" name="e" value="0" size="5" onkeyup="wordCount(document.facebookForm.w,this)" />words entered</span></div>
                <br />
                <asp:Label class="error" runat="server" ID="QuThreeErr">Please fill this in.</asp:Label></li>
                </ul>
            </fieldset>
        
            <fieldset class="WhereFoundDrpDown">
            <legend>Where did you hear about our Summer School?*</legend>
            <asp:DropDownList ID="WhereFoundDrpDown" runat="server" tabindex="39">
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
          
            <asp:Button ID="Button1" runat="server" Text="APPLY" type="submit" 
                class="inputButton" name="Button1" tabindex="40" onclick="Button1_Click3"/>
   
        </form>
    </div>
</body>
</html>
