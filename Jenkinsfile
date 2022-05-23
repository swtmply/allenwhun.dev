pipeline {
    //agent none
    agent any

    stages {
        stage('Build') {
            /*
            agent{
                docker {image 'node:16-alpine'}
            }
            */
            steps{
                echo 'Configuring YARN..'
                nodejs('Node-16.14'){
                    echo 'passed nodeJS'
                    bat 'yarn install'
                    bat 'yarn build'
                    bat 'npm -v'
                }
                echo 'Build Completed, Continuing into Testing...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
                //sh 'make check || true' 
                //junit '**/target/*.xml' 
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
            }
        }
    }
}
