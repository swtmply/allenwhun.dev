pipeline {
    agent any

    stages {
        stage('Test build') {
            steps{
                echo 'executing yarn?!?!?!'
                nodejs('Node-16.14'){
                    sh 'yarn install'
                    sh 'yarn build'
                }
            }
        }
/*        stage('Build') {
            steps {
                echo 'Building...
                //sh 'make' 
                //archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
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
*/
        }
    }
}
