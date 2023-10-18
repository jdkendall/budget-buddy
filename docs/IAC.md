### Postgres RDS CloudFormation Stack

File: [db.cloudformation.yaml](../iac/db.cloudformation.yaml)

This CloudFormation template provisions a Postgres RDS instance on AWS. The instance details, such as credentials, port,
and CIDR block, can be customized using parameters.

_Author's note_: I recommend provisioning a database manually on another provider for free instead for personal development purposes, or just hosting one locally. 
The $15/month on a micro DB, while probably not bank-breaking, is better used on extra coffee. (RDS is an excellent choice for business projects, however, and worth the extra cost for all the benefits over other means of provisioning Postgres. Multi-AZ will save your bacon.)

#### Deployment:

To deploy the CloudFormation stack, use the following AWS CLI command:

```sh
aws cloudformation create-stack \
    --stack-name BudgetBuddyPostgresRDS \
    --template-body file://iac/db.cloudformation.yaml \
    --parameters \
        ParameterKey=MasterUsername,ParameterValue=your_master_username \
        ParameterKey=MasterUserPassword,ParameterValue=your_master_password \
        ParameterKey=DatabasePort,ParameterValue=5432 \
        ParameterKey=CIDRBlock,ParameterValue=0.0.0.0/0 \
        ParameterKey=AllocatedStorage,ParameterValue=20 \
        ParameterKey=DBInstanceClass,ParameterValue=db.t4g.micro
```

Set parameter values as appropriate for your use case. 0.0.0.0/0 is wide-open access, so narrow as necessary for your
environment.

#### Parameters:

| Parameter Name     | Description                                      | Default Value |
|--------------------|--------------------------------------------------|---------------|
| MasterUsername     | The master username for the PostgreSQL instance. | admin         |
| MasterUserPassword | The master password for the PostgreSQL instance. | (n/a)         |
| DatabasePort       | The port for the PostgreSQL instance.            | 5432          |
| CIDRBlock          | CIDR block for database access.                  | (n/a)         |
| AllocatedStorage   | Allocated storage in GB.                         | 20            |
| DBInstanceClass    | The database instance class to spin up.          | db.t4g.micro  |

#### Outputs:

- **DatabaseEndpoint**: Endpoint of the provisioned Postgres RDS instance.

