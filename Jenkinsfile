pipeline {
    agent {
        Dockerfile true
    }

    stages {
        stage('Build') {
            steps{
                echo 'Yarning yarn?!?!?'
                bat 'node --version'
                nodejs('Node-16.14'){
                    echo 'passed nodeJS'
                    bat 'yarn install'
                    bat 'yarn build'
                }
                bat 'make'
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
