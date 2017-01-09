echo "Installing JDG "

oc create -f jboss-datagrid-template.yml

echo "Installing Oshinko Server"

oc new-app -f http://goo.gl/ZU02P4

echo "Setup complete"
