pipeline {
    agent any

    stages {
        stage('Build') {
            steps{
                echo 'executing yarn?!?!?!'
                nodejs('Node-16.14'){
                    echo 'passed nodeJS'
                    sh 'yarn install'
                    sh 'yarn build'
                }
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
