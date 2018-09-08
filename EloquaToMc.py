import requests, base64, sys
from io import BytesIO
import urllib
import simplejson as json
import requests
import xlrd
from collections import OrderedDict
import xlwt
import string
from bs4 import BeautifulSoup
import re


book = xlwt.Workbook()
authorizationSheetname = "Authorization Details"
workbook = xlrd.open_workbook("Email Detail Eloqua To MC.xlsx")
authWorksheet = workbook.sheet_by_name(authorizationSheetname)
shHeader = book.add_sheet("Email Details")
col1_name = 'Email Name'
col2_name = 'Image Name'
col3_name = 'Migration Status'
shHeader.write(0, 0, col1_name)
shHeader.write(0, 1, col2_name)
shHeader.write(0, 2, col3_name)
n=1
auth=authWorksheet.cell_value(0,1 )
clientId=authWorksheet.cell_value(1,1 )
print 'hello'
clientSecret=authWorksheet.cell_value(2,1 )
"""
auth='RGVsb2l0dGVTYW5kYm94XFJhamF0LkJoYXdzYXI6RGVsb2l0dGUuMQ=='
clientId='ycv0vh5sh27nsbfwy9nz0won'

clientSecret='fLdvlDZuIWKuDrptyP9CTHAT'
"""
#MC part
url = "https://auth.exacttargetapis.com/v1/requestToken"


Dict={}
payload1 = "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"clientId\"\r\n\r\n"+clientId+"\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; name=\"clientSecret\"\r\n\r\n"+clientSecret+"\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--"
headers = {
    'content-type': "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
    'cache-control': "no-cache",
    'postman-token': "96177052-aa1f-9b23-fab4-cd4f2bb25a5f"
    }
 
response = requests.request("POST", url, data=payload1, headers=headers)
print 'mc part' 
print(response.text)
getTokenResponse =json.loads(response.text)
accessToken= getTokenResponse['accessToken']







#print 'Auth '+ auth
EloquaAuthorization='Basic '+auth
#Email part
emailSheetname = "Emails"
eamilWorksheet = workbook.sheet_by_name(emailSheetname)
num_rows = eamilWorksheet.nrows
num_cols = eamilWorksheet.ncols
emailDict={}
for curr_row in range(1, num_rows, 1):
    try:
        emailId = (str(eamilWorksheet.cell_value(curr_row,0 ))).replace('.0','')
        emailName1= eamilWorksheet.cell_value(curr_row,1 )
        #print 'excel read email '+emailId
        #print 'Creating emails  ' + eamilWorksheet.cell_value(curr_row,1 )
        #print 'url' +"https://secure.p01.eloqua.com/api/REST/1.0/assets/email/"+emailId
        emailResponse=requests.get("https://secure.p04.eloqua.com/api/REST/1.0/assets/email/"+emailId,headers = {
        'authorization': EloquaAuthorization,
        'content-type': "application/json"
        });
        print '1'
        print 'fetching email details'
        #print emailResponse.text
        email= json.loads(emailResponse.text.encode('utf-8').strip())
        emailName=email['name']
        emailHtml=email['htmlContent']
        # emailHtml['html'] = str(emailHtml['html'])
        print 'hi'
        emailHtml = emailHtml['html'].encode('utf-8')
        print emailHtml
        print type(emailHtml)
        #soup = BeautifulSoup(emailHtml['html'])
        #soup1=soup.get_text()
        #str=''+emailHtml['html']
        soup = BeautifulSoup(emailHtml, "html.parser")
        images = []
        for img in soup.findAll('img'):
            images.append(img.get('src'))
        print'images links'
        print(images)
        for image in images:
            print image
        for image in images:
            print 'hi'
            #print image['fullImageUrl']
            if "http" not in image:
                image='http://img.en25.com'+image
                #print 'if'
                #print image['fullImageUrl']
                
            #else:
                 #print 'else'
                 #print image['fullImageUrl']
            try:
                url=sys.argv[1]
            except IndexError:
                htmlUrl=image
            
            print 'html URL found'
            print htmlUrl
            buffered = BytesIO(requests.get(htmlUrl).content)
            img_base64 = base64.b64encode(buffered.getvalue())
            print(img_base64.decode())
            lastIndexOf=image.rfind('/')+1
            lastIndexOf2=image.rfind('.')
            extension=image[lastIndexOf2+1:len(image)]
            print 'extension'
            print extension.lower()
            try:
                imageData = OrderedDict()
                print 'image name'
                imageData['name']=image[lastIndexOf:lastIndexOf2]
                print imageData['name']
                imageData['file']=img_base64.decode()
                assetData= OrderedDict()
                if extension=='jpg':
                    assetData['id']=23
                    assetData['name']='jpg'
                elif extension=='jpeg':
                    assetData['id']=22
                    assetData['name']='jpeg'
                elif extension=='png':
                    assetData['id']=28
                    assetData['name']='png'
                else:
                    assetData['id']=20
                    assetData['name']='gif'
                

                imageData['assetType']=assetData
                payload = json.dumps(imageData)
                #print payload
                url = "http://www.exacttargetapis.com/asset/v1/content/assets"
                headers = {
                    'content-type': "application/json",
                    'authorization': "Bearer "+accessToken,
                    'cache-control': "no-cache",
                    'postman-token': "9c1c91ad-bed8-6caf-5bbf-e0b0a1ec567c"
                }
                response = requests.request("POST", url, data=payload, headers=headers)
                #print 'final image result'
                #print(response.text)
                Mcimage= json.loads(response.text.encode('utf-8').strip())
                imageProperty=Mcimage['fileProperties']
                #print imageProperty['publishedURL']
                #print 'url of eloqua'+EloquaUrl
                htmlUrl= str(htmlUrl)
                print 'EloquaUrl1: ' + htmlUrl
                print type(htmlUrl)
                McUrl=str(imageProperty['publishedURL'])
                print 'McUrl: '+McUrl
                print type(McUrl)
                Dict[image[lastIndexOf:lastIndexOf2]]=McUrl
                #print 'url of MC'+imageProperty['publishedURL']
                
                #emailHtml=emailHtml.replace(htmlUrl,McUrl)
                emailHtml=emailHtml.replace(htmlUrl,McUrl)
                shHeader.write(n, 1, image[lastIndexOf:lastIndexOf2])
                shHeader.write(n, 2, 'Complete')
                n=n+1  
                #print 'url of MC'+imageProperty['publishedURL']
                
                # emailHtml['html']=emailHtml['html'].replace(EloquaUrl1,McUrl)
                #regExp = re.compile(EloquaUrl1, re.IGNORECASE)
                #emailHtml['html'] = regExp.sub(McUrl, emailHtml['html'])
            except Exception as e:
                print 'error occured for emails error :' +str(e)
                try:
                    htmlUrl=image
                    htmlUrl= str(htmlUrl)
                    McUrl=Dict[image[lastIndexOf:lastIndexOf2]]
                    print 'McUrl: '+McUrl
                    print type(McUrl)
                    emailHtml=emailHtml.replace(htmlUrl,McUrl)
                except Exception as e:
                    n=n+1
                    shHeader.write(n, 1, image[lastIndexOf:lastIndexOf2])
                    shHeader.write(n, 2, 'not migrated')
                

            
            #soup1.replace(EloquaUrl1,McUrl)
            #emailHtml['html']=emailHtml['html'].replace("http://img.en25.com/EloquaImages/clients/AmericanExpressSBSEMEASandbox/{d2037f61-8be1-412f-a466-8f74dd38c950}_top-head.jpg","Rajat")
        print 'final html details '+emailHtml
        
    
        #creating Email
        #payload1 = "{\n    \"depth\":\"minimal\",\n    \"name\":\" " +emailName+  " \",\n    \"archive\":\""+emailArchive+"\",\n    \"bounceBackEmail\":\""+emailBounceBackEmail+"\",\n    \"htmlContent\":\""+emailHtmlContent+"\",\n    \"permissions\":\""+emailPermissions+"\",\n    \"emailFooterId\":\""+emailFooterId+"\,\n    \"emailHeaderId\":\""+emailHeaderId+"\",\n    \"emailGroupId\":\""+emailGroupId"+\",\n    \"isContentProtected\":\""+emailIsContentProtected+"\",\n    \"isPlainTextEditable\":\""+emailIsPlainTextEditable+"\",\n    \"isPrivate\":\""+emailIsPrivate+"\",\n    \"renderMode\":\""+emailRenderMode+"\",\n    \"replyToEmail\":\""+emailReplyToEmail+"\",\n    \"sendPlainTextOnly\":\""+emailSendPlainTextOnly+"\",\n    \"senderEmail\":\""+emailSenderEmail+"\",\n    \"senderName\":\""+emailSenderName+"\",\n    \"subject\":\""+emailSubject+"\"\n}"
        
        print 'creating email'
        print '2'
        emailData = OrderedDict()
        emailData['contentType']= 'application/vnd.etmc.email.Message; kind=paste'
        assetData= OrderedDict()
        assetData['id']=208
        assetData['name']='htmlemail'
        assetData['displayName']='HTML Email'
        #assetPayload = json.dumps(assetData)
        emailData['assetType']=assetData
        emailData['name']=email['name']
        emailName=email['name']
        viewData= OrderedDict()
        htmlData= OrderedDict()
        htmlData['content']=emailHtml
        #htmlPayload = json.dumps(htmlData)
        viewData['html']=htmlData
        subjectData= OrderedDict()
        subjectData['contentType']='application/vnd.etmc.email.View; kind=subjectline'
        subjectData['content']=email['subject']
        #subjectPayload = json.dumps(subjectData)
        viewData['subjectline']=subjectData
        emailData['views']=viewData
        payload = json.dumps(emailData)
        print payload
        url = "http://www.exacttargetapis.com/asset/v1/content/assets"
        headers = {
            'content-type': "application/json",
            'authorization': "Bearer "+accessToken,
            'cache-control': "no-cache",
            'postman-token': "9c1c91ad-bed8-6caf-5bbf-e0b0a1ec567c"
        }
        response = requests.request("POST", url, data=payload, headers=headers)
        print 'final result'
        print(response.text.encode('utf-8').strip())
        shHeader.write(n, 0, emailName)
        shHeader.write(n, 2, 'Complete')
        n=n+1
        
    except Exception as e:
        print 'error occured for emails error :' +str(e)
        #shHeader.write(n, 0, emailName1)
        #shHeader.write(n, 2, 'Failed')
        n=n+1


book.save("Email Migration Report")













