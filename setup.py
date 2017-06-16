import os
from setuptools import setup, find_packages


PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

setup(name='aclevo3',
	version='1.0',
	author='Carver Harrison',
	author_email='carver@aclevo.xyz',
	url='https://github.com/appsembler/paasbakeoff',
	packages=find_packages(),
	include_package_data=True,
	description='Aclevo v3',
	install_requires=open('%s/requirements.txt' % os.environ.get('OPENSHIFT_REPO_DIR', PROJECT_ROOT)).readlines(),
#	install_requires=['Mezzanine==1.2.4',],
)
