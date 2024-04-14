pipeline {
    agent any
    tools {
        nodejs "nodeJs"
    }
    stages {
        stage('initialize') {
            steps {
                echo 'initializing the build pipeline..'
            }
        }
        stage('check npm installed version') {
            steps {
                sh 'npm --version'
            }
        }
        stage('clone repository') {
            steps {
                git branch: 'master', url:'https://github.com/felixivance/gallery-devops.git'
            }  
        }
        stage('build code') {
            steps {
                sh 'npm install'
            }
        }
        stage('test code') {
            steps {
                sh 'npm test'
            }
        }
        stage('Call Render Webhook') {
            steps {
                script {
                    def webhookUrl = 'https://api.render.com/deploy/srv-cods5o8l6cac73bpjau0?key=0QQuMEDDNd8'
                    def response = sh(script: "curl -X POST ${webhookUrl}", returnStdout: true).trim()
                    echo "Webhook response: ${response}"
                    
                }
            }
        }
        stage('Send Slack Message') {
            steps {
                slackSend(channel: '#felix_ip1', color: 'good', message: "Build ID: ${BUILD_ID}\nSite uploaded to Render : [Link](https://gallery-devops-ucmt.onrender.com/)")
            
            }
        }
    }
}