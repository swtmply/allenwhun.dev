pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Running ${env.BUILD_ID} on ${env.JENKINS_URL}'
                bat 'make' 
                archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
                bat 'make check || true' 
                junit '**/target/*.xml' 
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
            }
        }
    }
}
