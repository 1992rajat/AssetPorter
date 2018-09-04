import urllib
import simplejson as json
import requests
import xlrd
from collections import OrderedDict
import xlwt


GCPAuthorization='Basic RGVsb2l0dGVTYW5kYm94XFJhamF0LkJoYXdzYXI6RGVsb2l0dGUuMQ=='
JAPAuthorization='Basic QW1lcmljYW5FeHByZXNzQXVzdHJhbGlhXEJyYXRhdGkuRGFzOkRlbG9pdHRlLjE='
book = xlwt.Workbook()
landingPageSheetname = "LandingPages"
workbook = xlrd.open_workbook("Landing Page.xlsx")
landingPageWorksheet = workbook.sheet_by_name(landingPageSheetname)
num_rows = landingPageWorksheet.nrows
num_cols = landingPageWorksheet.ncols
landingPagesDict={}
landingPagesDict1={}


for curr_row in range(1, num_rows, 1):
    try:
        landingPageId = (str(landingPageWorksheet.cell_value(curr_row,0 ))).replace('.0','')
        print landingPageId
        print 'Creating ' + landingPageWorksheet.cell_value(curr_row,1 )
        print 'url' +"https://secure.p01.eloqua.com/api/REST/2.0/assets/landingPage/"+landingPageId
        landingPageResponse=requests.get("https://secure.p01.eloqua.com/api/REST/2.0/assets/landingPage/"+landingPageId,headers = {
        'authorization': JAPAuthorization,
        'content-type': "application/json"
        });
        print 'landingPage called'
        landingPage= json.loads(landingPageResponse.text)
        print '2'
        print 'helo'+landingPageResponse.text
        #Creating map for email Headers mapping for oldId and newID
        landingPageData = OrderedDict()
        oldLandingPageId=landingPage['id']
        id= landingPage['id']
        landingPageData['name']=landingPage['name']
        if 'relativePath' in landingPage:
            landingPageData['relativePath']=landingPage['relativePath']
        #landingPageData['relativePath']="/contenttest1"
        landingPageData['folderId']=(str(landingPageWorksheet.cell_value(curr_row,2 ))).replace('.0','')
        landingPageData['micrositeId']=(str(landingPageWorksheet.cell_value(curr_row,3 ))).replace('.0','')

        landingPageData['htmlContent']=landingPage['htmlContent']
        print '3'
        
        #creating landingPage
        #payload = "{\n    \"depth\":\"minimal\",\n    \"name\":\" " +landingPageName+  " \"\n  \"permissions\":\"" +landingPagePermissions+  "\",\n    \"emailFooterId\":\"" +landingPageEmailFooterId+  "\",\n    \"emailHeaderId\":\"" +landingPageEmailHeaderId+  "\",\n    \"isVisibleInOutlookPlugin\": \"" +landingPageIsVisibleInOutlookPlugin+  "\"\n}"
        payload = json.dumps(landingPageData)
        url = "https://secure.p01.eloqua.com/api/REST/1.0/assets/landingPage"
        headers = {
            'content-type': "application/json",
            'authorization': GCPAuthorization,
            'cache-control': "no-cache",
            'postman-token': "228ab48f-5eef-36fb-a1f1-abe79aeae24c"
        }
        print '4'
        newLandingPageResponse = requests.request("POST", url, data=payload, headers=headers)
        print 'landingPage response '+ newLandingPageResponse.text
        newLandingPage= json.loads(newLandingPageResponse.text)
        newLandingPageId=newLandingPage['id']
        print 'newaskdsljkdf'+newLandingPage['id']
        landingPagesDict[str(oldLandingPageId)]=str(newLandingPageId)
        landingPagesDict1[str(oldLandingPageId)]=str(newLandingPageId)+'@'+landingPage['name']
        
    except Exception as e:
        print 'error occured for Id: '+ str(e)

shHeader = book.add_sheet("Landing Pages")
col1_name = 'Landing page Name'
col2_name = 'Landing page Old Instance Id'
col3_name = 'Landing page New Instance Id'
col4_name = 'Migration Status'




shHeader.write(0, 0, col1_name)
shHeader.write(0, 1, col2_name)
shHeader.write(0, 2, col3_name)
shHeader.write(0, 3, col4_name)
n=1

for k, v in landingPagesDict1.items():
    print(k,v)
    v.split('@')
    shHeader.write(n, 0, v.split('@')[1])
    shHeader.write(n, 1, k)
    shHeader.write(n, 2, v.split('@')[0])
    shHeader.write(n, 3, 'Complete')
    n=n+1

book.save("Landing Page Report")


