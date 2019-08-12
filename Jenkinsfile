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
                docker 'node:12.8.0-slim'
            }
            environment { HOME="." }
            steps{
                sh "npm i"
                sh "npm run dist"
            }
        }
        stage("Package"){            
            agent { label ' master' }
            steps{
                sh "docker build -t osm-routes ."
            }
        }
    }
}