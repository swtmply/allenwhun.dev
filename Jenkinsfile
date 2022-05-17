pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                //bat 'make' 
                //archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                sh 'make check || true' 
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
