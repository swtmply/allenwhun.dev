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
                    bat 'git clone https://github.com/swtmply/allenwhun.dev.git
                    bat 'yarn install'
                    bat 'yarn build'
                    bat 'npm i *'
                    bat 'npm -v'
                    echo 'passed nodeJS'
                    //sample 12345
                }
                echo 'Build Completed, Continuing into Testing...'
            }
        }

        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying..'
            }
        }
    }
}
