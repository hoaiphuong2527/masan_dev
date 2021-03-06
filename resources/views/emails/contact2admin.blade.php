<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
        "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact email</title>
</head>
<body>
<center>
    <div style="background: #fafafa; padding: 15px;" border="0" cellpadding="0" cellspacing="0">
        <table width="600" align="center">
            <tr>
                <td align="center" valign="top">
                    <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%">
                        <tr>
                            <td align="center" valign="top">
                                <table border="0" cellpadding="0" cellspacing="0" width="600">
                                    <tr>
                                        <td align="center" valign="top">
                                            <p style="text-align: left">
                                                Hello,
                                            </p>
                                            <p style="text-align: left">
                                                This is a new enquiry we have received in Masan High-Tech Materials website.
                                            </p>
                                            <p style="text-align: left">
                                                Please kindly check the below details and arrange to reply as soon as possible.
                                            </p>
                                            <p style="text-align: left">
                                                You just received new contact from {{ $input['name'] ?? '[name]' }}
                                            </p>
                                            <div style="text-align: left">- Name: {{ $input['name'] ?? '[name]' }}</div>
                                            <div style="text-align: left">- E-mail: {{ $input['email'] ?? '[email]' }}</div>
                                            <div style="text-align: left">- Company: {{ $input['company'] ?? '[company]' }}</div>
                                            <div style="text-align: left">- Message:
                                                <p>{{ $input['company_profile'] ?? '[company_profile]' }}</p>
                                            </div>
                                            <p style="text-align: left">
                                                Thanks,
                                            </p>
                                            <p style="text-align: left">
                                                MHT Web Admin
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </div>
</center>
</body>
</html>