# import necessary libraries
import pandas as pd
from flask import Flask, render_template, jsonify
from sqlalchemy import create_engine

app = Flask(__name__)

engine = create_engine("sqlite:///db/bigfoot.sqlite")

# Create a route that renders index.html template
@app.route("/")
def home():
    return render_template("index.html")


# Query the database and return the jsonified results
@app.route("/data")
def data():
    conn = engine.connect()

    query = '''
        SELECT
            STRFTIME('%Y', timestamp) AS sighting_year,
            COUNT(timestamp) AS sighting_count
        FROM
            bigfoot
        GROUP BY
            STRFTIME('%Y', timestamp)
        ORDER BY
            sighting_year;
    '''

    results_df = pd.read_sql(query, con=conn)
    
    results_json = results_df.to_json(orient='records')

    conn.close()

    return results_json

if __name__ == "__main__":
    app.run(debug=True)
