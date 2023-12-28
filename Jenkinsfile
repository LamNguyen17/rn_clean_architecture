pipeline {
    agent any

    environment {
        PATH = "/usr/bin:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    nodejs(nodeJSInstallationName: 'YourNodeJSInstallation') {
                        sh 'npm install'
                    }
                }
            }
        }

//         stage('Build') {
//             steps {
//                 script {
//                     nodejs(nodeJSInstallationName: 'YourNodeJSInstallation') {
//                         sh 'npx react-native build-android'
//                         sh 'npx react-native build-ios'
//                     }
//                 }
//             }
//         }

        // Add more stages as needed (e.g., testing, deployment)
    }
}
