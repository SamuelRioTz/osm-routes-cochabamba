pipeline{
    agent none
    stages{
        stage("Clone Repository"){
            agent { label 'master' }
            steps{
                git 'https://github.com/SamuelRioTz/osm-routes-cochabamba.git'
                sh "echo Cloned!"
            }
            
        }
    }
}