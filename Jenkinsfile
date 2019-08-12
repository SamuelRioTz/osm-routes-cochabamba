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
        stage("Build"){
            agent{
                label 'master'
            }
            steps{
                sh "docker build -t osm-routes ."
            }
        }
        stage("Deployment QA"){
            agent { label 'master' }
            steps{
                sh "docker rm osm-routes -f || true"
                sh "docker run -d -p 81:80 --name  osm-routes osm-routes"
            }
        }
    }
}