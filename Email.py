import urllib
import simplejson as json
import requests
import xlrd
from collections import OrderedDict
import xlwt

GCPAuthorization='Basic ZGVsb2l0dGVzYW5kYm94XHJhamF0LmJoYXdzYXI6RGVsb2l0dGUuMQ=='
JAPAuthorization='Basic ZGVsb2l0dGVtZXJjdXJ5dGVzdFxzd2F0aS5taXNocmE6U01zeTMxIUA='
book = xlwt.Workbook()
book1 = xlwt.Workbook()
headerSheetname = "Email Headers"
workbook = xlrd.open_workbook("Email Details.xlsx")
headerWorksheet = workbook.sheet_by_name(headerSheetname)
num_rows = headerWorksheet.nrows
num_cols = headerWorksheet.ncols
headersDict={}
for curr_row in range(1, num_rows, 1):
    try:
        headerId = (str(headerWorksheet.cell_value(curr_row,0 ))).replace('.0','')
        print 'Excel read header '+headerId
        print 'Creating header ' + headerWorksheet.cell_value(curr_row,1 )
        print 'url' +"https://secure.p01.eloqua.com/api/REST/1.0/assets/email/header/"+headerId
        headerResponse=requests.get("https://secure.p01.eloqua.com/api/REST/1.0/assets/email/header/"+headerId,headers = {
        'authorization': JAPAuthorization,
        'content-type': "application/json"
        });
        print 'Fetching header details'
        header= json.loads(headerResponse.text)
        print 'details '+headerResponse.text
        #Creating map for email Headers mapping for oldId and newID
        headerData = OrderedDict()
        oldHeaderId=header['id']
        headerData['name']=header['name']
        headerData['body']=header['body']
        headerData['folderId']= (str(headerWorksheet.cell_value(curr_row,2 ))).replace('.0','')

        #creating header
        print 'Creating header'
        payload = json.dumps(headerData)
        url = "https://secure.p01.eloqua.com/api/REST/1.0/assets/email/header"
        headers = {
            'content-type': "application/json",
            'authorization': GCPAuthorization,
            'cache-control': "no-cache",
            'postman-token': "228ab48f-5eef-36fb-a1f1-abe79aeae24c"
        }
        newHeaderResponse = requests.request("POST", url, data=payload, headers=headers)
        print 'header response '+ newHeaderResponse.text
        newHeader= json.loads(newHeaderResponse.text)
        newHeaderId=newHeader['id']
        headersDict[str(oldHeaderId)]=str(newHeaderId)
    except Exception as e:
        print 'error occured for Hedaers  error :'+ str(e)
print 'header mapping'
shHeader = book.add_sheet("Email Header")
col1_name = 'Header Old Id'
col2_name = 'Header New Id'

shHeader.write(0, 0, col1_name)
shHeader.write(0, 1, col2_name)
n=1
for k, v in headersDict.items():
    print(k,v)
    shHeader.write(n, 0, k)
    shHeader.write(n, 1, v)
    n=n+1


#Footers part
footerSheetname = "Email Footers"
footerWorksheet = workbook.sheet_by_name(footerSheetname)
num_rows = footerWorksheet.nrows
num_cols = footerWorksheet.ncols
footersDict={}
for curr_row in range(1, num_rows, 1):
    try:
        footerId = (str(footerWorksheet.cell_value(curr_row,0 ))).replace('.0','')
        print 'Excel read footer'+footerId
        print 'Creating footer ' + footerWorksheet.cell_value(curr_row,1 )
        print 'url' +"https://secure.p01.eloqua.com/api/REST/1.0/assets/email/footer/"+footerId
        footerResponse=requests.get("https://secure.p01.eloqua.com/api/REST/1.0/assets/email/footer/"+footerId,headers = {
        'authorization': JAPAuthorization,
        'content-type': "application/json"
        });
        print 'retrieving footer details'
        footer= json.loads(footerResponse.text)
        print 'details '+footerResponse.text
        #Creating map for email Headers mapping for oldId and newID
        footerData = OrderedDict()
        oldFooterId=footer['id']
        footerData['name']=footer['name']
        footerData['body']=footer['body']
        footerData['folderId']= (str(footerWorksheet.cell_value(curr_row,2 ))).replace('.0','')
        #creating footer
        print 'creating footer'
        payload = json.dumps(footerData)
        url = "https://secure.p01.eloqua.com/api/REST/1.0/assets/email/footer"
        headers = {
            'content-type': "application/json",
            'authorization': GCPAuthorization,
            'cache-control': "no-cache",
            'postman-token': "228ab48f-5eef-36fb-a1f1-abe79aeae24c"
        }
        newFooterResponse = requests.request("POST", url, data=payload, headers=headers)
        print 'footer response '+ newFooterResponse.text
        newFooter= json.loads(newFooterResponse.text)
        newFooterId=newFooter['id']
        print 'newaskdsljkdf'+newFooter['id']
        footersDict[str(oldFooterId)]=str(newFooterId)
    except Exception as e:
        print 'error occured for Id: Footers error :'+ str(e)
print 'footer mapping'
shFooter = book.add_sheet("Email Footer")
col1_name = 'Footer Old Id'
col2_name = 'Footer New Id'

shFooter.write(0, 0, col1_name)
shFooter.write(0, 1, col2_name)
n=1
for k, v in footersDict.items():
    print(k,v)
    shFooter.write(n, 0, k)
    shFooter.write(n, 1, v)
    n=n+1


#group part
groupSheetname = "Email Groups"
groupWorksheet = workbook.sheet_by_name(groupSheetname)
num_rows = groupWorksheet.nrows
num_cols = groupWorksheet.ncols
groupsDict={}
for curr_row in range(1, num_rows, 1):
    try:
        groupId = (str(groupWorksheet.cell_value(curr_row,0 ))).replace('.0','')
        print 'Excel read footer '+groupId
        print 'Creating ' + groupWorksheet.cell_value(curr_row,1 )
        print 'url' +"https://secure.p01.eloqua.com/api/REST/1.0/assets/email/group/"+groupId
        groupResponse=requests.get("https://secure.p01.eloqua.com/api/REST/1.0/assets/email/group/"+groupId,headers = {
        'authorization': JAPAuthorization,
        'content-type': "application/json"
        });
        print 'fetching group details'
        group= json.loads(groupResponse.text)
        print 'deatils '+groupResponse.text
        print 'footer value' + str(group['emailFooterId'])
        #Creating map for email Headers mapping for oldId and newID
        groupData = OrderedDict()
        oldGroupId=group['id']
        groupData['name']=group['name']
        groupData['permissions']=group['permissions']
        if 'emailFooterId' in group:
            if str(group['emailFooterId']) == '12':
                print 'group footer 1'
                groupData['emailFooterId']='1'
            else:
                print 'group footer 2'
        if 'emailFooterId' in group:
            if str(group['emailFooterId']) in footersDict:
                if footersDict.get(str(group['emailFooterId'])) is None:
                    print 'Footer Id not present in footersDict'
                else:
                    groupData['emailFooterId']=footersDict.get(str(group['emailFooterId']))
        else:
            print 'Footer Id not present'
        if 'emailHeaderId' in group:
            if str(group['emailHeaderId']) == '10':
                print 'group header  1'
                groupData['emailHeaderId']='20'
            else:
                print 'group hedaer 2'
        if 'emailHeaderId' in group:
            if str(group['emailHeaderId']) in headersDict:
                if headersDict.get(str(group['emailHeaderId'])) is None:
                    print 'Header Id not present in footersDict'
                else:
                    groupData['emailHeaderId']=headersDict.get(str(group['emailHeaderId']))
                    
        else:
            print 'Header Id not present'
        
        groupData['isVisibleInOutlookPlugin']=group['isVisibleInOutlookPlugin']
        groupData['subscriptionLandingPageId']=group['subscriptionLandingPageId']
        groupData['unsubscriptionLandingPageId']=group['unsubscriptionLandingPageId']
        #creating group
        #payload = "{\n    \"depth\":\"minimal\",\n    \"name\":\" " +groupName+  " \"\n  \"permissions\":\"" +groupPermissions+  "\",\n    \"emailFooterId\":\"" +groupEmailFooterId+  "\",\n    \"emailHeaderId\":\"" +groupEmailHeaderId+  "\",\n    \"isVisibleInOutlookPlugin\": \"" +groupIsVisibleInOutlookPlugin+  "\"\n}"
        print 'creating group'
        payload = json.dumps(groupData)
        url = "https://secure.p01.eloqua.com/api/REST/1.0/assets/email/group"
        headers = {
            'content-type': "application/json",
            'authorization': GCPAuthorization,
            'cache-control': "no-cache",
            'postman-token': "228ab48f-5eef-36fb-a1f1-abe79aeae24c"
        }
        newGroupResponse = requests.request("POST", url, data=payload, headers=headers)
        print 'group response '+ newGroupResponse.text
        newGroup= json.loads(newGroupResponse.text)
        newGroupId=newGroup['id']
        print 'newaskdsljkdf'+newGroup['id']
        groupsDict[str(oldGroupId)]=str(newGroupId)
    except Exception as e:
        print 'error occured for Groups error :'+ str(e)
print 'group mapping'
shGroup = book.add_sheet("Email Groups")
col1_name = 'Group Old Id'
col2_name = 'Group New Id'

shGroup.write(0, 0, col1_name)
shGroup.write(0, 1, col2_name)
n=1
for k, v in groupsDict.items():
    print(k,v)
    shGroup.write(n, 0, k)
    shGroup.write(n, 1, v)
    n=n+1




#Email part
emailSheetname = "Emails"
eamilWorksheet = workbook.sheet_by_name(emailSheetname)
num_rows = eamilWorksheet.nrows
num_cols = eamilWorksheet.ncols
emailDict={}
emailDict1={}
for curr_row in range(1, num_rows, 1):
    try:
        emailId = (str(eamilWorksheet.cell_value(curr_row,0 ))).replace('.0','')
        print 'excel read email '+emailId
        print 'Creating emails  ' + eamilWorksheet.cell_value(curr_row,1 )
        print 'url' +"https://secure.p01.eloqua.com/api/REST/1.0/assets/email/"+emailId
        emailResponse=requests.get("https://secure.p04.eloqua.com/api/REST/1.0/assets/email/"+emailId,headers = {
        'authorization': JAPAuthorization,
        'content-type': "application/json"
        });
        oldEmailId=emailId
        print 'fetching email details'
        email= json.loads(emailResponse.text.encode('utf-8').strip())
        emailData = OrderedDict()
        print 'details '+emailResponse.text.encode('utf-8').strip()
        emailData['name']=email['name']
        emailData['folderId']= (str(eamilWorksheet.cell_value(curr_row,2 ))).replace('.0','')
        print '1'
        """if email['archive'] is None:
            print 'archive not present for Email'
        else:
            emailData['archive']=email['archive']"""
        
        emailData['bounceBackEmail']= email['bounceBackEmail']
        print '2'
        emailData['htmlContent']=email['htmlContent']
        print '3' 
        """emailData['permissions']=email['permissions']
        print '4'"""
        if 'emailFooterId' in email:
            if str(email['emailFooterId']) == '12':
                print 'footer 1'
                emailData['emailFooterId']='1'
            else:
                print 'footer 2'
        if 'emailFooterId' in email:
            if str(email['emailFooterId']) in footersDict:
                if footersDict.get(str(email['emailFooterId'])) is None:
                    print 'Footer Id not present in footersDict'
                else:
                    emailData['emailFooterId']=footersDict.get(str(email['emailFooterId']))
        else:
            print 'Footer Id not present'
        if 'emailHeaderId' in email:
            if str(email['emailHeaderId']) == '10':
                print 'Header 1'
                emailData['emailHeaderId']='20'
            else:
                print 'Header 2'
        if 'emailHeaderId' in email:
            if str(email['emailHeaderId']) in headersDict:
                if headersDict.get(str(email['emailHeaderId'])) is None:
                    print 'Header Id not present in footersDict'
                else:
                    emailData['emailHeaderId']=headersDict.get(str(email['emailHeaderId']))
        else:
            print 'Header Id not present'
        if 'emailGroupId' in email:
            if str(email['emailGroupId']) in groupsDict:
                if groupsDict.get(str(email['emailGroupId'])) is None:
                    print 'Header Id not present in footersDict'
                else:
                    emailData['emailGroupId']=groupsDict.get(str(email['emailGroupId']))
        else:
            print 'Group Id not present'

        
        
        print '5'
        #emailData['isContentProtected']=email['isContentProtected']
        print '6'
        emailData['isPlainTextEditable']=email['isPlainTextEditable']
        print '7'
        #emailData['isPrivate']=email['isPrivate']
        print '8'
        emailData['isTracked']=email['isTracked']
        print '9'
        #emailData['renderMode']=email['renderMode']
        print '10'
        emailData['replyToEmail']=email['replyToEmail']
        emailData['replyToName']=email['replyToName']
        emailData['isTracked']=email['isTracked']
        print 'is tracked>>>>>>>>>>>>>'+ email['isTracked']
        print '11'
        emailData['sendPlainTextOnly']=email['sendPlainTextOnly']
        print '12'
        emailData['senderEmail']=email['senderEmail']
        print '13'
        emailData['senderName']=email['senderName']
        print '14'
        emailData['subject']=email['subject']
        print '15'
        #creating Email
        #payload1 = "{\n    \"depth\":\"minimal\",\n    \"name\":\" " +emailName+  " \",\n    \"archive\":\""+emailArchive+"\",\n    \"bounceBackEmail\":\""+emailBounceBackEmail+"\",\n    \"htmlContent\":\""+emailHtmlContent+"\",\n    \"permissions\":\""+emailPermissions+"\",\n    \"emailFooterId\":\""+emailFooterId+"\,\n    \"emailHeaderId\":\""+emailHeaderId+"\",\n    \"emailGroupId\":\""+emailGroupId"+\",\n    \"isContentProtected\":\""+emailIsContentProtected+"\",\n    \"isPlainTextEditable\":\""+emailIsPlainTextEditable+"\",\n    \"isPrivate\":\""+emailIsPrivate+"\",\n    \"renderMode\":\""+emailRenderMode+"\",\n    \"replyToEmail\":\""+emailReplyToEmail+"\",\n    \"sendPlainTextOnly\":\""+emailSendPlainTextOnly+"\",\n    \"senderEmail\":\""+emailSenderEmail+"\",\n    \"senderName\":\""+emailSenderName+"\",\n    \"subject\":\""+emailSubject+"\"\n}"
        print 'creating email'
        payload=json.dumps(emailData)
        url='https://secure.p01.eloqua.com/api/REST/2.0/assets/email'
        headers = {
            'content-type': "application/json",
            'authorization': GCPAuthorization,
            'cache-control': "no-cache",
            'postman-token': "228ab48f-5eef-36fb-a1f1-abe79aeae24c"
        }
        newEmailResponse = requests.request("POST", url, data=payload, headers=headers)
        print json.loads(newEmailResponse.text.encode('utf-8').strip())
        print 'email response '+ newEmailResponse.text.encode('utf-8').strip()
        newEmail= json.loads(newEmailResponse.text.encode('utf-8').strip())
        newEmailId=newEmail['id']
        #print 'newaskdsljkdf'+newGroup['id']
        print 'oldEmailId'+oldEmailId
        emailDict[str(oldEmailId)]=str(newEmailId)
        emailDict1[str(oldEmailId)]=str(newEmailId)+'@'+email['name']
    except Exception as e:
        print 'error occured for emails error :' +str(e)
"""
shEmail = book.add_sheet("Email")


col1_name = 'Email Old Id'
col2_name = 'Email New Id'

shEmail.write(0, 0, col1_name)
shEmail.write(0, 1, col2_name)
n=1
book.save("filename")
for k, v in emailDict.items():
    print(k,v)
    shEmail.write(n, 0, k)
    shEmail.write(n, 1, v)
    n=n+1
book.save("Email Details")
"""
shEmail = book1.add_sheet("Emails")
col1_name = 'Email Name'
col2_name = 'Email Old Instance Id'
col3_name = 'Email New Instance Id'
col4_name = 'Migration Status'




shEmail.write(0, 0, col1_name)
shEmail.write(0, 1, col2_name)
shEmail.write(0, 2, col3_name)
shEmail.write(0, 3, col4_name)
n=1

for k, v in emailDict1.items():
    print(k,v)
    v.split('@')
    shEmail.write(n, 0, v.split('@')[1])
    shEmail.write(n, 1, k)
    shEmail.write(n, 2, v.split('@')[0])
    shEmail.write(n, 3, 'Complete')
    n=n+1

book1.save("Email Report1")










