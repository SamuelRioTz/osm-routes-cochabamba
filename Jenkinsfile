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
        stage("Stash"){            
            agent { label ' master' }
            steps{
                sh "docker save -o osm-routes.tar osm-routes"
                stash name: "stash-artifact", includes: "osm-routes.tar"
            }
        }
        stage("Deployment QA"){
            agent { label 'master' }
            steps{
                sh "docker rm osm-routes -f || true"
                sh "docker run -d -p 80:80 --name  osm-routes osm-routes"
            }
        }
        stage("Deployment PROD"){
            agent{label 'PROD'}
            steps{
                unstash "stash-artifact"
                sh "docker load -i osm-routes.tar"
                sh "docker rm osm-routes -f || true"
                sh "docker run -d -p 80:80 --name  osm-routes osm-routes"
            }
        }
    }
}