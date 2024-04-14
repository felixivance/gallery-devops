pipeline {
    agent any
    tools {
        nodejs "nodeJs"
    }
    stages {
        stage('initialize') {
            steps {
                echo 'initializing the build pipeline.'
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
    }
}