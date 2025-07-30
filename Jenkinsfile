// Jenkinsfile for React Frontend
pipeline {
    agent any

    tools {
        nodejs 'Node17'  // Ensure this is configured in Jenkins global tools
    }

    stages {
        stage('Clone Frontend Code') {
            steps {
                git branch: 'main', url: 'https://github.com/madhucm17/ReactFrontend.git'
            }
        }

        stage('Install & Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Deploy to Apache') {
            steps {
                script {
                    sh '''
                        # If Jenkins user has passwordless sudo access, this will work
                        sudo rm -rf /var/www/ReactFrontend/*
                        sudo cp -r build/* /var/www/ReactFrontend/
                        sudo systemctl restart apache2
                    '''
                }
            }
        }
    }
}
