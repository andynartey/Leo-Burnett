using System;
using System.Collections.Generic;
using System.Web;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;

namespace LeoSummerSchool
{
    public class ApplicationProcess
    {

        string connectionString = ConfigurationManager.AppSettings["connectionstring"].ToString();
        string bckupConnectionString = ConfigurationManager.AppSettings["bckupconnectionstring"].ToString();

        public void AddApplicant(Applicant applicant)
        {

            const string storedProcedure = "InsertApplicant";

            //create connection object
            SqlConnection connection = new SqlConnection();
            connection.ConnectionString = connectionString;

            SqlConnection bckupConnection = new SqlConnection();
            bckupConnection.ConnectionString = bckupConnectionString;


            //create command object
            SqlCommand command = new SqlCommand(storedProcedure, connection);
            command.CommandType = CommandType.StoredProcedure;


            SqlParameter positionsoughtParam = Parameters.PositionSought;
            positionsoughtParam.Value = applicant.PositionSought;
            command.Parameters.Add(positionsoughtParam);

            SqlParameter firstnameParam = Parameters.FirstName;
            firstnameParam.Value = applicant.FirstName;
            command.Parameters.Add(firstnameParam);

            SqlParameter lastnameParam = Parameters.LastName;
            lastnameParam.Value = applicant.LastName;
            command.Parameters.Add(lastnameParam);

            SqlParameter address1Param = Parameters.Address1;
            address1Param.Value = applicant.Address1;
            command.Parameters.Add(address1Param);

            SqlParameter address2Param = Parameters.Address2;
            address2Param.Value = applicant.Address2;
            command.Parameters.Add(address2Param);

            SqlParameter countyParam = Parameters.County;
            countyParam.Value = applicant.County;
            command.Parameters.Add(countyParam);

            SqlParameter postcodeParam = Parameters.Postcode;
            postcodeParam.Value = applicant.Postcode;
            command.Parameters.Add(postcodeParam);

            SqlParameter contactnumberParam = Parameters.ContactNumber;
            contactnumberParam.Value = applicant.ContactNumber;
            command.Parameters.Add(contactnumberParam);

            SqlParameter emailParam = Parameters.Email;
            emailParam.Value = applicant.Email;
            command.Parameters.Add(emailParam);

            SqlParameter eucitzenParam = Parameters.EUCitzen;
            eucitzenParam.Value = applicant.EUCitizen;
            command.Parameters.Add(eucitzenParam);

            SqlParameter workpermitrqdParam = Parameters.WorkPermitRqd;
            workpermitrqdParam.Value = applicant.WorkPermitRqd;
            command.Parameters.Add(workpermitrqdParam);

            SqlParameter answertoquestion1Param = Parameters.AnswerToQuestion1;
            answertoquestion1Param.Value = applicant.AnswerToQuestion1;
            command.Parameters.Add(answertoquestion1Param);

            SqlParameter answertoquestion2Param = Parameters.AnswerToQuestion2;
            answertoquestion2Param.Value = applicant.AnswerToQuestion2;
            command.Parameters.Add(answertoquestion2Param);

            SqlParameter wherefoundoutParam = Parameters.WhereFoundOut;
            wherefoundoutParam.Value = applicant.WhereFoundOut;
            command.Parameters.Add(wherefoundoutParam);



            try
            {
                connection.Open();
                command.ExecuteNonQuery();


                //place in bckup db 

                command.Connection = bckupConnection;

                bckupConnection.Open();
                command.ExecuteNonQuery();



            }
            catch (Exception ex)
            {
                throw;
            }
            finally
            {
                if (connection.State == ConnectionState.Open)
                {
                    connection.Close();
                }

            }


        


        }


        #region Parameters
        protected class Parameters
        {

            public static SqlParameter ApplicantID
            {
                get
                {
                    return new SqlParameter("@ApplicantID", SqlDbType.BigInt, 0);
                }
            }

            public static SqlParameter PositionSought
            {
                get
                {
                    return new SqlParameter("@PositionSought", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter FirstName
            {
                get
                {
                    return new SqlParameter("@FirstName", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter LastName
            {
                get
                {
                    return new SqlParameter("@LastName", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter Address1
            {
                get
                {
                    return new SqlParameter("@Address1", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter Address2
            {
                get
                {
                    return new SqlParameter("@Address2", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter County
            {
                get
                {
                    return new SqlParameter("@County", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter Postcode
            {
                get
                {
                    return new SqlParameter("@Postcode", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter ContactNumber
            {
                get
                {
                    return new SqlParameter("@ContactNumber", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter Email
            {
                get
                {
                    return new SqlParameter("@Email", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter EUCitzen
            {
                get
                {
                    return new SqlParameter("@EUCitzen", SqlDbType.Bit, 0);
                }
            }

            public static SqlParameter WorkPermitRqd
            {
                get
                {
                    return new SqlParameter("@WorkPermitRqd", SqlDbType.Bit, 0);
                }
            }

            public static SqlParameter AnswerToQuestion1
            {
                get
                {
                    return new SqlParameter("@AnswerToQuestion1", SqlDbType.NText, 1073741823);
                }
            }

            public static SqlParameter AnswerToQuestion2
            {
                get
                {
                    return new SqlParameter("@AnswerToQuestion2", SqlDbType.NText, 1073741823);
                }
            }

            public static SqlParameter WhereFoundOut
            {
                get
                {
                    return new SqlParameter("@WhereFoundOut", SqlDbType.NVarChar, 1073741823);
                }
            }

            public static SqlParameter DateSubmitted
            {
                get
                {
                    return new SqlParameter("@DateSubmitted", SqlDbType.DateTime, 0);
                }
            }

        }
        #endregion


        #region ColumnNames
        protected class ColumnNames
        {
            public const string ApplicantID = "ApplicantID";
            public const string PositionSought = "PositionSought";
            public const string FirstName = "FirstName";
            public const string LastName = "LastName";
            public const string Address1 = "Address1";
            public const string Address2 = "Address2";
            public const string County = "County";
            public const string Postcode = "Postcode";
            public const string ContactNumber = "ContactNumber";
            public const string Email = "Email";
            public const string EUCitzen = "EUCitzen";
            public const string WorkPermitRqd = "WorkPermitRqd";
            public const string AnswerToQuestion1 = "AnswerToQuestion1";
            public const string AnswerToQuestion2 = "AnswerToQuestion2";
            public const string WhereFoundOut = "WhereFoundOut";
            public const string DateSubmitted = "DateSubmitted";

        }
        #endregion	



    }
}