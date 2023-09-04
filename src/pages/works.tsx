
import "bootstrap/dist/css/bootstrap.min.css";
import  '../assets/style/Works.css';


export function Works() { 

  return (
    <>      
      <div className='works'>
        <h1>SOME WORKS</h1>
      </div> 

      <div className="main-container">

        <div className="row">

          <div className='col-md-6 col-inline'>
            <h3>Santander Bank / Estágio</h3>
            <p>
              COBOL · JCL · ORACLE  · PLSQL · Agille
            </p>
          </div>

          <div className='col-md-6 col-inline'>
            <h3>SEMPREIT / Software Developer </h3>
            <p>
              .NET / C# · VueJs · KnockoutJS · NodeJS · <br/> 
              Azure · SQL Server · jMetter · Sellenium · <br/>
              C# · Git · GitLab
            </p>
          </div>

        </div>

        <div className="row">
          <div className='col-md-6'>
            <h3>Fullbar / Software Developer</h3>
            <p>
              .NET / C# · AWS · SQL Server · Git · <br/>
              BitBucket · Trello · Agille
            </p>
          </div>

          <div className='col-md-6'>
            <h3>XP BANK / Software Developer </h3>
            <p>
              Angular · React · SQL Server · Oracle · .NET <br/>
              Core · Datadog · Kibana · Grafana · kubernetes ·<br/>
              Service Fabric · Kafka · RabbitMQ · Redis · <br/>
              Typescript · Service Bus · Azure Functions
            </p>
          </div>          
        </div>
        

        <div className="row">
          <div className='col-md-6'>
            <h3>Turbi / Software Developer</h3>
            <p>
              Datadog · Nodejs · Google Cloud <br/>
              Platform (GCP) · Functions · MySQL ·<br/>
              TypeScript
            </p>
          </div>

          <div className='col-md-6'>
            <h3>TECH TEAM / Software Developer </h3>
            <p>
              Kibana · React.js · .NET Core · Node.js · <br/>
              C# · HTML5 · Mongodb · Microsoft <br/>
              SQL Server · TypeScript
            </p>
          </div>          
        </div>
      </div>


    <hr/>
    </>
  )
} 