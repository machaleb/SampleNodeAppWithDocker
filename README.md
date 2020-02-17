# SampleNodeAppWithDocker
# How to run application
-->cd SampleNodeAppWithDocker
-->docker build -t image_name/version .
-->dokcer run -itd -p outsideaccessPort:applicationPort image_name
#once applicationis up and running test it using command
--> curl http://localhost:outsideaccessPort/
