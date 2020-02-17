# SampleNodeAppWithDocker 
this is sampke node application running on express server.You can run the application using docker also.
## How to run application 

-->cd SampleNodeAppWithDocker   

-->docker build -t image_name/version .   

-->dokcer run -itd -p outsideaccessPort:applicationPort image_name    


## Once applicationis up and running test it using command  
--> curl http://localhost:outsideaccessPort/
