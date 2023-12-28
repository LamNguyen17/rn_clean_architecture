pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    sh 'yarn install'
                }
            }
        }

        stage('Build Android') {
            steps {
                script {
                    sh 'npx react-native run-android --variant=release'
                }
            }
        }

        stage('Build iOS') {
            steps {
                script {
                    sh 'npx react-native run-ios --configuration=Release'
                }
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    sh 'yarn test'
                }
            }
        }
    }
}
