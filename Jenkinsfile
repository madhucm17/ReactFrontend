// Jenkinsfile for React Frontend
pipeline {
    agent any

    tools {
        nodejs 'Node17'  // Make sure this is configured in Global Tools
    }

    stages {
        stage('Clone Frontend Code') {
            steps {
                git 'https://github.com/your-username/react-frontend-repo.git'
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
                sh 'sudo rm -rf /var/www/my-frontend/*'
                sh 'sudo cp -r build/* /var/www/my-frontend/'
                sh 'sudo systemctl restart apache2'
            }
        }
    }
}
